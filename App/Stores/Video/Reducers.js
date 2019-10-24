import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { VideoTypes } from './Actions'

export const getVideosRequest = (state) => ({
  ...state,
})

export const getVideosSuccess = (state, { videos }) => {
  
  
  return {
    ...state,
    videos
  }
}

export const getVideosFailure = (state, { errorMessage }) => ({
  ...state,
  errorMessage,
})

export const showDetailsRequest = (state, {video}) => ({
  ...state,
  video
})

export const showDetailsSuccess = (state) => ({
  ...state,
})

export const showDetailsFailure = (state, { errorMessage }) => ({
  ...state,
  errorMessage,
})


export const reducer = createReducer(INITIAL_STATE, {
  [VideoTypes.GET_VIDEOS_REQUEST]: getVideosRequest,
  [VideoTypes.GET_VIDEOS_SUCCESS]: getVideosSuccess,
  [VideoTypes.GET_VIDEOS_FAILURE]: getVideosFailure,

  [VideoTypes.SHOW_DETAILS_REQUEST]: showDetailsRequest,
  [VideoTypes.SHOW_DETAILS_SUCCESS]: showDetailsSuccess,
  [VideoTypes.SHOW_DETAILS_FAILURE]: showDetailsFailure,
  

})
