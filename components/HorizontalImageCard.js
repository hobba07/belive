import React, { useState } from "react";
import {
  ScrollView,
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


function HorizontalImageCard({ props, informations, screen }) {
  const navigation = useNavigation();


  function openBottomModal() {

    props.setVisibility(true);


  }

  function navigatoToScreen(screen, information, modal) {
    if (modal) {
      openBottomModal();
    } else {
      navigation.navigate(screen, information);
    }

  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        informations.map((information) => {
          return (
            <TouchableOpacity key={information.id} onPress={() => navigatoToScreen(screen, information, props.modal)}>
              <View>
                <ImageBackground
                  style={[styles.imgBg, { height: props.height, width: props.width - 20 }]}
                  imageStyle={{ borderRadius: 25 }}
                  source={information.img}
                >

                  {
                    props.cardhighlight == true ?
                      <View style={styles.viewImg}>
                        <Text style={styles.viewImgText}>{props.cardhighlightText}</Text>
                      </View>

                      : null
                  }

                </ImageBackground>
                {
                  information.titleLive ?
                    <Text style={styles.titleCard}>
                      {information.titleLive}
                    </Text>
                    : null
                }
                {
                  information.description || information.title ?
                    <View style={{
                      width: props.width,
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 10,
                      marginLeft: 10,
                      alignItems: "flex-start",
                    }}>
                      {
                        information.description ?
                          <Image style={{ marginRight: 20 }} source={require("../images/heart.svg")} />
                          : null
                      }
                      <View style={{ width: props.width * 0.5 }}>
                        {
                          information.title ?
                            <Text style={{
                              color: "#ffffff",
                              fontSize: 16,
                              marginBottom: 10,
                              fontWeight: "bold",
                            }}>{information.title}</Text>
                            : null
                        }
                        {information.description ?
                          <Text style={{
                            color: "#ffffff",
                            fontSize: 16,
                            fontWeight: "bold",
                          }}>{information.description}</Text> : null}
                      </View>
                    </View>
                    : null
                }
              </View>
            </TouchableOpacity>
          );
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgBg: {
    marginLeft: 10,
    marginRight: 10,
    position: "relative",
  },
  viewImg: {
    position: "relative",
    width: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    left: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#C7086B70",
    borderRadius: 5,
  },
  viewImgText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  titleCard: {
    color: "#970E5C",
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
export default HorizontalImageCard;
