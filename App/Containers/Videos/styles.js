import {StyleSheet} from 'react-native'
import { Metrics, Colors, Fonts } from '../../Theme';
export default StyleSheet.create({

    sectionHeaderContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },

    sectionHeader: {
        ...Fonts.style.h2,
        color: Colors.white,
        fontWeight: "500"
    },

    videoContainer: {
        width: Metrics.screenWidth/2.5,
        height: Metrics.screenHeight*0.25,
        padding: 10,
        // marginBottom: 10,
        // borderBottomColor: Colors.white,
        // borderBottomWidth: 0.5,
        flexDirection: 'column',
        // shadowColor: Colors.shadow,
        // shadowOffset: ,
        // shadowOpacity

    },

        imageAndReviewsContainer: {
            flex: 0.75,
            justifyContent: 'center',
            alignItems: 'center'
        },

            videoThumbnail: {
                width: Metrics.screenWidth/2.7,
                height: Metrics.screenHeight*0.18,
            },

        videoBodyContainer: {
            flex: 0.25, flexDirection: 'column',
        
        },

            titleAndPlayContainer: {
                flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            },

                title: {
                    ...Fonts.style.normal,
                    color: Colors.white
                },

            descriptionContainer: {
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center'
            },

                description: {
                    ...Fonts.style.normal,
                    color: Colors.white
                }
})