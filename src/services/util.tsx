import { listUser } from '@/services/apiserver/user';
import { listOrg } from '@/services/apiserver/org';
import { listCourse } from '@/services/apiserver/course';
import { listTeacher } from '@/services/apiserver/teacher';
import { listSku } from '@/services/apiserver/sku';

export function listQueryWithColumns(listFn, columns, qs = []) {
  return listWrapper(listFn, genQueryhandle(columns, qs));
}

export function genQueryhandle(cols, initialValues = []) {
  return (params) => {
    const def = [];
    initialValues.forEach((e) => {
      def.push(e);
    });

    const qs = cols
      .reduce((pre, cur) => {
        if (cur.query) {
          Array.prototype.push.apply(pre, cur.query);
        }
        return pre;
      }, [])
      .reduce((pre, cur) => {
        const m = cur.match(/{(\w+)}/);
        if (m && params[m[1]]) {
          pre.push(cur.replace(m[0], params[m[1]]));
          delete params[m[1]];
        }
        return pre;
      }, def);

    if (qs) {
      params.query = '' + qs;
    }

    return params;
  };
}

// https://procomponents.ant.design/components/table?current=1&pageSize=5
export function listWrapper(listFn, fn = (p) => p) {
  // 第一个参数 params 查询表单和 params 参数的结合
  // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
  return async (params, sort) => {
    // { key: descend } -> { sorter: key, order: desc}
    Object.keys(sort).forEach((key) => {
      params.sorter = key;
      params.order = sort[key].replace(/end$/, '');
    });

    return listFn(fn(params)).then((r) => {
      const { data, ...resp } = r;
      return {
        data: data.list ? data.list : [],
        total: data.total,
        ...resp,
      };
    });
  };
}

export async function selectUserRequest({ keyWords }) {
  return await listUser({ query: keyWords ? 'name=~' + keyWords : '' }).then((r) => {
    const list = r.data?.list || [];

    return list.reduce((pre, cur) => {
      pre.push({
        value: cur.id,
        label: `${cur.name} - ${cur.nickname}`,
      });
      return pre;
    }, []);
  });
}

export async function selectUserRequestById({ keyWords }) {
  return await listUser({ query: keyWords ? 'id=~' + keyWords : '' }).then((r) => {
    const list = r.data?.list || [];

    return list.reduce((pre, cur) => {
      pre.push({
        value: cur.id,
        label: `${cur.name} - ${cur.nickname}`,
      });
      return pre;
    }, []);
  });
}

export async function selectOrgRequest({ keyWords, ownerId }) {
  const query = [];
  if (keyWords) {
    query.push('name=~' + keyWords);
  }

  if (ownerId) {
    query.push('owner_id=' + ownerId);
  }

  return await listOrg({ query: '' + query }).then((r) => {
    const list = r.data?.list || [];

    return list.reduce((pre, cur) => {
      pre.push({
        value: cur.id,
        label: cur.name,
      });
      return pre;
    }, []);
  });
}

export async function selectCourseRequest({ keyWords }) {
  return await listCourse({ query: keyWords ? 'name=~' + keyWords : '' }).then((r) => {
    const list = r.data?.list || [];

    return list.reduce((pre, cur) => {
      pre.push({
        value: cur.id,
        label: cur.name,
      });
      return pre;
    }, []);
  });
}

export async function selectTeacherRequest({ keyWords, orgId }) {
  const query = [];
  if (keyWords) {
    query.push('name=~' + keyWords);
  }
  if (orgId) {
    query.push('org_id=' + orgId);
  }
  return await listTeacher({ query: '' + query }).then((r) => {
    const list = r.data?.list || [];

    return list.reduce((pre, cur) => {
      pre.push({
        value: cur.id,
        label: `${cur.name} (${cur.orgName})`,
      });
      return pre;
    }, []);
  });
}


export async function selectSkuRequest({ keyWords, ownerId }) {
  const query = [];
  if (keyWords) {
    query.push('name=~' + keyWords);
  }

  if (ownerId) {
    query.push('owner_id=' + ownerId);
  }

  return await listSku({ query: '' + query }).then((r) => {
    const list = r.data?.list || [];

    return list.reduce((pre, cur) => {
      pre.push({
        value: cur.id,
        label: `${cur.name} (${cur?.org?.name})`,
      });
      return pre;
    }, []);
  });
}
