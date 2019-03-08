import { combineReducers } from 'redux';
import cards from './mainReducer';

const rootReducer = combineReducers({cards});

export default rootReducer;