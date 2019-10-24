import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList } from 'react-native'

import styles from './styles'
import Container from '../../Components/Container';
import HeaderNavigation from '../../Components/HeaderNavigation';



class VideoDetails extends Component {
  constructor(props) {
      super(props);
  }

  

  render() {
    let video = this.props.navigation.getParam('video')
    let {title, description, url} = video;

    return (
      <Container>
        <HeaderNavigation sideNav={false} text={title}/>
        
      </Container>
    )  
    
  }
}


export default VideoDetails
