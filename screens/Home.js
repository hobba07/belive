import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import HorizontalImageCard from "../components/HorizontalImageCard";
import Modal from "react-native-modal";

function Home() {

  const listEnLive = [
    {
      id: 0,
      img: require("../images/image1.jpg"),
      titleLive: "MASTER OF SOUND",
      listImages: [
        require("../images/image2.jpg"),
        require("../images/image4.jpg"),
        require("../images/image5.jpg"),
      ],
    },
    {
      id: 1,
      img: require("../images/image2.jpg"),
      titleLive: "MATHIEU LAMBOLEY ET AMBROISINE BRE",
      listImages: [
        require("../images/image2.jpg"),
        require("../images/image4.jpg"),
        require("../images/image5.jpg"),
      ],


    },
    {
      id: 2,
      img: require("../images/image3.jpg"),
      titleLive: "CHARLOTTE CARDIN ET ALIOCHA",
      listImages: [
        require("../images/image2.jpg"),
        require("../images/image4.jpg"),
        require("../images/image5.jpg"),
      ],
    },
    {
      id: 3,
      img: require("../images/image4.jpg"),
      titleLive: "MASTER OF SOUND",
      listImages: [
        require("../images/image2.jpg"),
        require("../images/image4.jpg"),
        require("../images/image5.jpg"),
      ],
    },
  ];

  const listBientotlive = [
    {
      id: 0,
      img: require("../images/image5.jpg"),
      title: "Miguel martinez",
      description: "Mercredi 24/07/1996 a 00:00",
      apropos: "iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada",
    },
    {
      id: 1,
      img: require("../images/image6.jpg"),
      title: "Chrisian hog",
      description: "Jeudi 26/03/1996 a 23:00",
      apropos: "iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada",

    },
    {
      id: 2,
      img: require("../images/image7.jpg"),
      title: "Filip leonci",
      description: "Dimanche 12/02/1996 a 20:00",
      apropos: "iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada",
    },
    {
      id: 3,
      img: require("../images/image8.jpg"),
      title: "Wiili martinez",
      description: "Lundi 01/07/1998 a 00:00",
      apropos: "Wassim hamdaoui Wassim hamdaoui Wassim hamdaoui Wassim hamdaoui Wassim hamdaoui Wassim hamdaoui Wassim hamdaoui",
    },
  ];

  const listProchainelive = [
    {
      id: 0,
      img: require("../images/image9.jpg"),
      title: "Mike jackson",
      desc: "iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada.",
      date: "Mardi 24/07/1996",
    },
    {
      id: 1,
      img: require("../images/image4.jpg"),
      title: "Kiven derik",
      desc: "iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada.",
      date: "Mardi 24/07/1996",
    },
    {
      id: 2,
      img: require("../images/image7.jpg"),
      title: "Chris perces",
      desc: "iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada.",
      date: "Mardi 24/07/1996",
    },
    {
      id: 3,
      img: require("../images/image9.jpg"),
      title: "Jandriic nic",
      desc: "iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada iheb ben hamada.",
      date: "Mardi 24/07/1996",
    },
  ];

  const listUniversMusical = [
    {
      id: 0,
      img: require("../images/image2.jpg"),
      title: "Roben blond",
    },
    {
      id: 1,
      img: require("../images/image6.jpg"),
      title: "Victor perez",
    },
    {
      id: 2,
      img: require("../images/image8.jpg"),
      title: "Alpha blondi",
    },
    {
      id: 3,
      img: require("../images/image9.jpg"),
      title: "Mario gomez",
    },
  ];

  const listUniversPhoto = [
    {
      id: 0,
      img: require("../images/image1.jpg"),
      title: "Joeken jemin",
    },
    {
      id: 1,
      img: require("../images/image8.jpg"),
      title: "Lea loe",
    },
    {
      id: 2,
      img: require("../images/image7.jpg"),
      title: "Victoria smith",
    },
    {
      id: 3,
      img: require("../images/image6.jpg"),
      title: "Rosa blond",
    },
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [imageModal, setimageModal] = useState();
  const [descriptionModal, setdescriptionModal] = useState();
  const [dateModal, setdateModal] = useState();

  return (
    <LinearGradient
      colors={["#21224A", "#21224A", "#21224A", "#321036", "#321036"]}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Modal
          isVisible={isModalVisible}
          style={styles.modalContainer}
          animationIn={"slideInUp"}
          animationOut={"slideOutDown"}>
          <View
            style={styles.modalView}>
            <LinearGradient
              colors={["#21224A", "#21224A", "#21224A", "#21224A", "#321036"]}
              style={styles.modalLinearGradient}>
              <ImageBackground
                source={imageModal}
                imageStyle={styles.modalImageBorder}
                style={{ height: 200, marginBottom: 20 }}
              >
              </ImageBackground>
              <View style={styles.modalHead}>
                <Image style={{ marginRight: 20 }} source={require("../images/heart.svg")} />
                <Text style={styles.modalTitle}>Informations</Text>
              </View>
              <Text style={styles.modalDescription}>{descriptionModal}
              </Text>

              <Text style={styles.modalDate}>
                {dateModal}
              </Text>
              <TouchableOpacity
                style={styles.modalClose}
                key={"568"}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Image source={require("../images/closebs.svg")} />
              </TouchableOpacity>
            </LinearGradient>

          </View>
        </Modal>
        <View
          style={styles.titleLive}>
          <Text style={styles.textLive}>En live</Text>
          <View
            style={styles.dotLive}>
          </View>
        </View>
        <HorizontalImageCard
          props={{
            width: Dimensions.get("window").width,
            height: 200,
            cardhighlight: true,
            cardhighlightText: "live",
          }}
          informations={listEnLive}
          screen={"livedetail"}
        />
        <Text style={styles.textBL}>Bientot En live</Text>
        <HorizontalImageCard
          props={{
            width: Dimensions.get("window").width,
            height: 200,
          }}
          informations={listBientotlive}
          screen={"detailbl"}
        />
        <Text style={styles.textBL}>Prochaine lives</Text>

        <HorizontalImageCard
          props={{
            width: Dimensions.get("window").width * 0.5,
            height: 200,
            modal: true,
            setVisibility: setModalVisible,
            setImageModal: setimageModal,
            setDescModal: setdescriptionModal,
            setDateModal: setdateModal,
          }}
          informations={listProchainelive}
          screen={"signup"}
        />

        <Text style={styles.textBL}>Univers musical</Text>

        <HorizontalImageCard
          props={{
            width: Dimensions.get("window").width * 0.5,
            height: 200,
          }}
          informations={listUniversMusical}
          screen={"signup"}
        />

        <Text style={styles.textBL}>Univers musical</Text>

        <HorizontalImageCard
          props={{
            width: Dimensions.get("window").width * 0.5,
            height: 200,
          }}
          informations={listUniversPhoto}
          screen={"signup"}
        />
      </ScrollView>
    </LinearGradient>);
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "flex-start",
  },
  titleLive: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 10,
  },
  dotLive: {
    width: 3,
    height: 3,
    backgroundColor: "red",
    marginLeft: 15,
    marginBottom: 30,
    borderRadius: 10,
  },
  textLive: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  textBL: {
    color: "#9DA5AD",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 12,
    marginLeft: 10,
  },
  modalContainer: {
    position: "relative",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginLeft: 0,
    marginBottom: 0,
  },
  modalView: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.6,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalLinearGradient: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "relative",
  },
  modalHead: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  modalImageBorder: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalDescription: {
    paddingLeft: 30,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 30,
    paddingRight: 20,
  },
  modalTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalDate: {
    paddingLeft: 30,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 30,
  },
  modalClose: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 20,
  },
});
