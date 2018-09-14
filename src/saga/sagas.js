import { put } from "redux-saga/effects";

export const GetTodosList = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(function*(json){
      yield put({
        payload: json,
        type: 'TODOS_LOADED'
      })
    })
    .catch(err => new Error(err))
}
