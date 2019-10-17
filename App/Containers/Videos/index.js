import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList } from 'react-native'

import { connect } from 'react-redux'

import styles from './styles'
import { Colors, ApplicationStyles, Metrics, Images } from '../../Theme'
import NavigationService from '../../Services/NavigationService'

import VideoActions from '../../Stores/Video/Actions'



class Videos extends Component {
  constructor(props) {
      super(props);
  }

  

  render() {
    return (
        <View>
          
        </View>
    )  
    
  }
}

const mapStateToProps = (state) => ({
  videos: state.video.videos,
  
})

const mapDispatchToProps = (dispatch) => ({
  getVideos: () => dispatch(VideoActions.getVideos()),


})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Videos)