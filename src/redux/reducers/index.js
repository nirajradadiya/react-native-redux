import { combineReducers } from 'redux';
import auth from './postReducer';

const rootReducer = combineReducers({
    auth
});

export default rootReducer;