// a combineReducer is a built in function which take all the reducers and make   a single reducer or object
import {combineReducers} from 'redux';
import UserReducers from "./reducer-user";
import ActiveUserReducer from './reducers-active-user'

const allReducers=combineReducers({
    users:UserReducers,
    activeUser:ActiveUserReducer,
});

export default allReducers;