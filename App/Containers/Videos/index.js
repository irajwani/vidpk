import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import styles from './styles'
import { Colors, ApplicationStyles, Metrics, Images } from '../../Theme'
import NavigationService from '../../Services/NavigationService'

import VideoActions from '../../Stores/Video/Actions'
import Container from '../../Components/Container'
import HeaderNavigation from '../../Components/HeaderNavigation'



class Videos extends Component {
  constructor(props) {
      super(props);
      props.getVideos();
  }

  // componentWillMount = () => {
  //   this.props.getVideos();
  // }

  renderVideo = (video, index) => {
    console.log(video)
    return (  
      <TouchableOpacity
        key={index}
        style={styles.videoContainer}
        onPress={()=>console.log('toggle card open')}
        >
          <View style={styles.imageAndReviewsContainer}>

          </View>

          <View style={styles.videoBodyContainer}>
            <View style={styles.titleAndPlayContainer}>
              <Text style={styles.title}>{video.title}</Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{video.description}</Text>
            </View>
          </View>
          
        </TouchableOpacity>
      )
  }
  

  render() {
    // console.log(this.props.videos)
    return (
        <Container>
          <HeaderNavigation /> 
          {/* Loading Indic */}
          <FlatList
            data={this.props.videos}
            renderItem={(item,index) => this.renderVideo(item.item,index)}
            style={{flex: 0.8}}
            keyExtractor={item => item.url}
          />
        </Container>
    )  
    
  }
}

const mapStateToProps = (state) => ({
  videos: state.video.videos,
  
})

const mapDispatchToProps = (dispatch) => ({
  getVideos: () => dispatch(VideoActions.getVideosRequest()),


})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Videos)
