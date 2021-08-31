/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  StatusBar,

} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PhoneInput from "react-native-phone-number-input";
import SMConnect from "../components/BtnConnectSM";

import React from "react";
import auth from "@react-native-firebase/auth";

function SignUp({ navigation }) {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [valuek, setValuek] = useState("");
  const phoneInput = useRef(PhoneInput);


  return (

    <LinearGradient colors={["#21224A", "#21224A", "#21224A", "#321036", "#321036"]} style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image style={styles.logo}
             source={require("../images/logo.png")} />
      <Text style={styles.subtitle}>Lance du live prés de chez vous</Text>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="FR"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        keyboardType="phone-pad"
        containerStyle={styles.phoneInputContainer}
        textInputStyle={styles.textInputStyle}
        codeTextStyle={{ color: "#ffffff", fontSize: 12 }}
        flagButtonStyle={{ color: "#ffffff" }}
        textContainerStyle={styles.textContainerStyle}
        placeholder="Numéro de téléphone"
        phoneInputContainer={true}
        textInputProps={{ placeholderTextColor: "#81798F", fontSize: 14, selectionColor: "#ffffff" }}

      />
      <LinearGradient
        colors={["#F86664", "#890E59"]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.btnConnect}
      >
        <TouchableOpacity
          key={125}
          onPress={()=>navigation.navigate('home')}
          style={styles.toConnect}
        >
          <Text style={styles.textbtnConnect}>Me connecter</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.separate}>
        <View style={styles.separateLine}>

        </View>
        <Text style={{ color: "#81798F" }}>ou</Text>
        <View style={styles.separateLine}>

        </View>
      </View>

      <SMConnect
        enableIcon={true}
        text="Continuer avec votre e-mail"
        onPress={() => {
          alert("Email");
        }}
        textColor="#ffffff"
        backgroundColor="#675D78"
        icon={require("../images/mail.svg")}
      />

      <SMConnect
        enableIcon={true}
        text="Continuer avec Apple"
        onPress={() => {
          alert("Apple");
        }}
        textColor="#ffffff"
        backgroundColor="#000000"
        icon={require("../images/apple.svg")}
      />

      <SMConnect
        enableIcon={true}
        text="Continuer avec Facebook"
        onPress={() => {
          alert("Facebook");
        }}
        textColor="#ffffff"
        backgroundColor="#3A61B3"
        icon={require("../images/fb.svg")}
      />

      <SMConnect
        enableIcon={true}
        text="Continuer avec Google"
        onPress={() => {
          alert("Google");
        }}
        textColor="#000000"
        backgroundColor="#ffffff"
        icon={require("../images/google.svg")}
      />


    </LinearGradient>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subtitle: {
    marginTop: 50,
    fontSize: 21,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 100,
  },

  phoneInputContainer: {
    borderRadius: 40,
    backgroundColor: "#675D78",
    height: 50,

    width: "100%",
  },

  textInputStyle: {
    color: "#ffffff",
    backgroundColor: "#675D78",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
  },

  textContainerStyle: {
    backgroundColor: "#675D78",
    borderRadius: 40,
    color: "#ffffff",
    padding: 0,
    width: "100%",
  },

  btnConnect: {
    width: "100%",
    marginTop: 20,
    display: "flex",
    height: 50,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  textbtnConnect: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  toConnect: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo:{
    width: "50%",
    height: 80,
    resizeMode: "contain",
    marginTop: 50
  },
  separate:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20,
  },
  separateLine:{
    width: "44%",
    height: 1,
    backgroundColor: "#81798F"
  },

});
