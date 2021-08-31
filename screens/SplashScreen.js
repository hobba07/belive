import LinearGradient from 'react-native-linear-gradient';
import { Image,StatusBar } from 'react-native';


import React from 'react'

function SplashScreen() {
    return (
        <LinearGradient colors={['#E41DA1', '#F45972', '#A41C70', '#612180', '#172792']} style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image source={require('../images/logo.png')} />
        </LinearGradient>
    )
}

export default SplashScreen


