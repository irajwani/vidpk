import React, { Component } from 'react'
import { ScrollView, Text, Image, View, FlatList, SectionList, TouchableOpacity } from 'react-native'

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
      console.log(props);
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
    // console.log(this.props.videos)
    return (
        <Container>
          <HeaderNavigation /> 
          {/* Loading Indic */}
          
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Top Rated</Text>
          </View>

          <FlatList
            // sections={[{title: 'Top Rated', videos: this.props.videos},]}
            sections={this.props.videos}
            renderItem={(item,index) => this.renderVideo(item.item,index)}
            // renderSectionHeader={(item) => (
            //   <Text style={styles.sectionHeader}>{item.title}</Text>
            // )}
            style={{flex: 0.7}}
            horizontal={true}
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
