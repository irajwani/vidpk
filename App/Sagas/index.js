import { takeLatest, all } from 'redux-saga/effects'

// import { StartupTypes } from 'App/Stores/Startup/Actions'
import { VideoTypes } from '../Stores/Video/Actions'

// import { startup } from './StartupSaga'
import { getVideos } from './VideoSaga'


export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    // takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(VideoTypes.GET_VIDEOS_REQUEST, getVideos),
  

    
  ])
}
