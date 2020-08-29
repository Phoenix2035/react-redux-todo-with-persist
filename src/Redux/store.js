import {applyMiddleware, createStore} from "redux";
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const middleware = [logger];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;