export function listQueryWithColumns(listFn, columns) {
  return listWrapper(listFn, genQueryhandle(columns));
}

export function genQueryhandle(cols) {
  return (params) => {
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
      }, []);

    if (qs) {
      params['query'] = '' + qs;
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
      params['sorter'] = key;
      params['order'] = sort[key].replace(/end$/, '');
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
