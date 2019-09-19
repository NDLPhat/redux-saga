import * as taskApis from '../apis/task';

export const fetchListTask = () => {
  return dispatch => {
    taskApis
      .getList()
      .then(data => {
        console.log('data: ', data);
        dispatch({ type: 'FETCH_TASK' });
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };
};
