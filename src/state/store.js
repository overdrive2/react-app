import { createStore, combineReducers } from 'redux';
import userReducer from '../../app/reducers/userReducer';

const rootReducer = combineReducers({
  users: userReducer
});
const configureStore = () => {
  return  createStore(rootReducer);
}
export default configureStore;