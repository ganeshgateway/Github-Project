import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { createLogger } from 'redux-logger';

/**
 * Create store
*/
const configureStore = () => {

  // Added middleware thunk
  const middleware = [thunk];

  // Display logger in local evn
  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    middleware.push(logger);
  }

  return createStore(reducer, applyMiddleware(...middleware))
};

export { configureStore }