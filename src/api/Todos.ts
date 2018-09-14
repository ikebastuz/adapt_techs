export const GetTodosList = () => {
  return [{id:1, name: "one"}, {id:2, name: "two"}];
  /*
  dispatch({
    payload: [{id:1, name: "one"}, {id:2, name: "two"}],
    type: 'TODOS_LOADED'
  })
  */
  /*
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => reject(err))
  })
  */
};