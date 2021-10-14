import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import missionsReducer from './missions/Missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, logger),
);

export default store;
