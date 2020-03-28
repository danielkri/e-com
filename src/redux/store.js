import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//creating it like this to make it more scalable.
const middleWare = [logger];

const store = createStore(rootReducer,applyMiddleware(...middleWare));

export default store;