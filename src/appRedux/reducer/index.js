import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Auth from './Auth';


const reducers = combineReducers({
  auth: Auth,
});

export default reducers;