import { combineReducers } from 'redux';
import {configureStore} from './createStore';
import rootSaga from '../Sagas';
// import { reducer as authReducer } from './Auth/Reducers';
import { reducer as videoReducer } from './Video/Reducers';


export default () => {
  const rootReducer = combineReducers({
    video: videoReducer,

  })

  return configureStore(rootReducer, rootSaga)
}