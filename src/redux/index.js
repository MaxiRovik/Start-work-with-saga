import {createStore} from "redux";
import {applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleWare))
    );
sagaMiddleWare.run(rootSaga)
export default store;