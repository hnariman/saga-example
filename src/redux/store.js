import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { put, all } from "redux-saga/effects";

// we choose to define initial state (default values) of data we want to hold in redux store
// -- also we can hold an empty object {}, which is fine, based on use case
const initialState = { message: "initial message" };

// Redux requires reducer to process data immutably
// best practice is to structure project and hold reducers in own directory/file
// -- current file is for education/demo purposes only
const reducer = (state = initialState, action) => {
  if (action.type === "ACTION_ONE") {
    return { ...state, message: action.payload };
  }
  if (action.type === "ACTION_TWO") {
    return { ...state, message: action.payload };
  }
};

// sagas are simple middleware functions are async and use ES7 generators
// this is the biggest advantage of saga IMHO, because it's easily testable
function* exampleSaga() {
  yield put({ type: "ACTION_ONE", payload: "action one payload" });
}
// we usually "pack" all saga functions into container
export function* rootSaga() {
  yield all([exampleSaga()]);
}

// initialize middleware class instance
const middleware = createSagaMiddleware();

// create redux store to hold state data
export const store = createStore(reducer, applyMiddleware(middleware));
middleware.run(rootSaga);
