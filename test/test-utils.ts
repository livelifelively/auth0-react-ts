import { createStore, applyMiddleware } from 'redux';

import rootReducers from '../src/reducers/index';
import { middlewares } from '../src/store';
import {ShallowWrapper} from 'enzyme';

/**
 * Create a testing store with imported reducers, middlewares and initial state
 * @globals: rootReducers, middlewares
 * @param {Object} initialState
 * @returns {*}
 */
export const storeFactory = (initialState: object) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducers, initialState);
};

/**
 * @function findByDataTestAttr - find elements by their data-test value
 * @param {ShallowWrapper} wrapper
 * @param {string} attr
 * @returns {ShallowWrapper}
 */
export const findByDataTestAttribute = (wrapper: ShallowWrapper, attr: string): ShallowWrapper => {
  return wrapper.find(`[data-test="${attr}"]`);
};
