import { createStore,applyMiddleware } from "redux";
import rootReducer from "./rootreducer";
import logger from 'redux-logger'

const middleWare = [ logger ]
export const store = createStore(rootReducer,applyMiddleware(...middleWare))