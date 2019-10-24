import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getVideosRequest: null,
  getVideosSuccess: ['videos'],
  getVideosFailure: ['errorMessage'],

  showDetailsRequest: ['video'],
  showDetailsSuccess: null,
  showDetailsFailure: ['errorMessage']

})

export const VideoTypes = Types
export default Creators
