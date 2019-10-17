import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { VideoTypes } from './Actions'

export const getVideosRequest = (state) => ({
  ...state,
})

export const getVideosSuccess = (state, { videos }) => {
  console.log('success');
  console.log(data);
  return {
    ...state,
    videos
  }
}

export const getVideosFailure = (state, { errorMessage }) => ({
  ...state,
  errorMessage,
})



export const reducer = createReducer(INITIAL_STATE, {
  [VideoTypes.GET_VIDEOS_REQUEST]: getVideosRequest,
  [VideoTypes.GET_VIDEOS_SUCCESS]: getVideosSuccess,
  [VideoTypes.GET_VIDEOS_FAILURE]: getVideosFailure,
  

})
