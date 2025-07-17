export const getList = (limit, offset, sort, order) => {
  return `/news?target=app&limit=${limit}&offset=${offset}&sort=${sort}&order=${order}`;
};

export const getOne = (id) => {
  return `/news/${id}`;
};
