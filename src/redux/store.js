import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; //it allows our browser to actually cache our store now depending on certain configuration
import logger from 'redux-logger'; //all redux-logger middleware does is it catches the action it console logs it out for us and then it moves it along.

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //...middlewares will spread in all of the methods or all of the values in array into applyMiddleware function call as individual arguments.

const persistor = persistStore(store);

export { store, persistor };
