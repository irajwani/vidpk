import React, { Component } from 'react'
import { ScrollView, Text, Image, View, FlatList, TouchableOpacity } from 'react-native'

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

  renderVideo = (video, index) => {
    
    return (  
      <TouchableOpacity
        key={index}
        style={styles.videoContainer}
        onPress={() => NavigationService.navigate('VideoDetails', {video: video})}
        >
          <View style={styles.imageAndReviewsContainer}>
            <Image
              source={require(`../../Assets/Images/logo.png`)}
              style={styles.videoThumbnail}
            />
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
  showDetails: (video) => dispatch(VideoActions.showDetailsRequest(video))


})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Videos)
