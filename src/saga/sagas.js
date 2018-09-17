import { put, takeEvery, all } from "redux-saga/effects";
import { GET_TODOS, RECIEVED_TODOS } from '../actions'

function* GetTodosList(){
  const json = yield fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())

  console.log(json);
  yield put({ type: RECIEVED_TODOS, payload: json });
}

function* actionWatcher() {
  yield takeEvery(GET_TODOS, GetTodosList)
}

export default function* rootSaga(){
  yield all([
    actionWatcher()
  ]);
}