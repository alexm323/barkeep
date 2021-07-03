import React from 'react'
import { View, StyleSheet,ImageBackground } from 'react-native'
import {Circle} from 'react-native-animated-spinkit'
const LoadingSpinner = () => {
    return (
        <ImageBackground
      source={require('../assets/purple_background.png')}
      style={styles.imageContainer}
      imageStyle={styles.imageStyle}
    > 
    <View style={styles.spinContainer}>
              <Circle color='white' size={100}/>
    </View>
  </ImageBackground>
    )
}

export default LoadingSpinner

const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      justifyContent:'center'
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    },
    spinContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: 'rgba(0,0,0,0.3)',
      paddingHorizontal: 20,
    }
  });