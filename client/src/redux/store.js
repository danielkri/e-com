import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

//creating it like this to make it more scalable.
const middleWare = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
