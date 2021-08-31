import LinearGradient from 'react-native-linear-gradient';
import { Image,StatusBar,StyleSheet } from 'react-native';


import React from 'react'

function SplashScreen() {
    return (
        <LinearGradient colors={['#E41DA1', '#F45972', '#A41C70', '#612180', '#172792']}
                        style={styles.bg}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image source={require('../images/logo.png')} />
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
  bg:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default SplashScreen


