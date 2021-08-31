/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import SignUp from "./screens/SignUp";
import detailBientoLive from "./screens/detailBientoLive";
import LiveDetail from "./screens/LiveDetail";

const Stack = createNativeStackNavigator();


function App() {
  const [timePassed, setTimePassed] = useState(false);

  useEffect(()=>{
    setTimeout(
      function() {
        setTimePassed(true)
      },2000
    )
  })

  return (

    !timePassed ?
      <SplashScreen />
      :
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="signup"
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="detailbl" component={detailBientoLive} />
          <Stack.Screen name="livedetail" component={LiveDetail} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

