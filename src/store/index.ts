import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers/index';

export const middlewares = [ReduxThunk];
const store = applyMiddleware(...middlewares)(createStore)(rootReducer);

export default store;
export const { dispatch } = store;
