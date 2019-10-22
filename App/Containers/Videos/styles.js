import {StyleSheet} from 'react-native'
import { Metrics, Colors, Fonts } from '../../Theme';
export default StyleSheet.create({
    videoContainer: {
        width: Metrics.screenWidth,
        height: Metrics.screenHeight*0.15,
        marginBottom: 2,
        borderBottomColor: Colors.white,
        borderBottomWidth: 0.5,
    },

        imageAndReviewsContainer: {
            flex: 0.2
        },

        videoBodyContainer: {flex: 75, flexDirection: 'column'},

            titleAndPlayContainer: {
                flex: 0.3,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            },

                title: {
                    ...Fonts.style.normal,
                    color: Colors.white
                },

            descriptionContainer: {
                flex: 0.7
            },

                description: {
                    ...Fonts.style.normal,
                    color: Colors.white
                }
})