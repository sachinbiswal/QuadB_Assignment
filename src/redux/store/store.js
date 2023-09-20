import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import applicationReducer from '../reducers/applicationReducer';

const rootReducer = combineReducers({
  application: applicationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
