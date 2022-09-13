export function singalQuery(params = {}) {
  const { current, pageSize, sorter, order, dump, ...query } = params;

  return {
    current,
    pageSize,
    sorter,
    order,
    dump,
    query: '' + Object.keys(query).map((k) => `${k}=${query[k]}`),
  };
}

// https://procomponents.ant.design/components/table?current=1&pageSize=5
export function listWrapper(myQuery, fn = (p) => p) {
  // 第一个参数 params 查询表单和 params 参数的结合
  // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
  return async (params, sort, filter) => {
    console.log(params, sort, filter);

    // { key: descend } -> { sorter: key, order: desc}
    Object.keys(sort).forEach((key) => {
      params['sorter'] = key;
      params['order'] = sort[key].replace(/end$/, '');
    });

    return myQuery(fn(params)).then((r) => {
      const { data, ...resp } = r;
      return {
        data: data.list,
        total: data.total,
        ...resp,
      };
    });
  };
}
