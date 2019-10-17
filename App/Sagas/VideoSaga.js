import { put, call } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import VideoActions from '../Stores/Video/Actions'
import { videoService } from '../Services/VideoService'

export function* getVideos() {
  const videoResponse = yield call(videoService.getVideos)
  
  if (videoResponse.status === 200) {
    yield put(VideoActions.getVideosSuccess(videoResponse.data.videos))
  } else {
    yield put(VideoActions.getVideosFailure('S** happened'))
  }
  
}
