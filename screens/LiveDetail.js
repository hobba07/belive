import React, { useState } from "react";
import Swiper from "react-native-swiper";
import {
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import LinearGradient from "react-native-linear-gradient";
import Share from "react-native-share";
import HorizontalImageCard from "../components/HorizontalImageCard";

function LiveDetail({ route }) {
  const detailData = route.params;

  const [likeimg, setLikeImg] = useState({
    img: require("../images/heart.svg"),
    isLiked: false,
  });
  const myCustomShare = async () => {
    const shareOptions = {
      message:
        "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
      // urls: [files.image1, files.image2]
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log("Error => ", error);
    }
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setTimeout(function() {
      setModalVisible(false);
    }, 2000);
  };

  const like = () => {
    if (likeimg.isLiked == false) {
      setLikeImg({
        img: require("../images/heart_pink.svg"),
        isLiked: true,
      });
      toggleModal();
    } else {
      setLikeImg({
        img: require("../images/heart.svg"),
        isLiked: false,
      });
    }
  };
  const listCamera = [
    {
      id: 0,
      img: require("../images/image4.jpg"),
      title: "Khabi martinez",
    },
    {
      id: 1,
      img: require("../images/image5.jpg"),
      title: "Cristiano",
    },
    {
      id: 2,
      img: require("../images/image1.jpg"),
      title: "Christian",
    },
    {
      id: 3,
      img: require("../images/image2.jpg"),
      title: "Joseph",
    },
  ];
  return (
    <LinearGradient
      colors={["#21224A", "#21224A", "#21224A", "#321036", "#321036"]}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <Modal
          isVisible={isModalVisible}
          style={styles.modalContainer}
          animationIn={"slideInDown"}
          animationOut={"slideOutUp"}>
          <View
            style={styles.modalWrapper}>
            <View
              style={styles.modalInfo}>
              <Image
                style={{ marginRight: 20 }}
                source={require("../images/checked.png")}
              />
              <Text style={styles.modalText}>
                Live épinglé dans vos favoris
              </Text>
            </View>
            <TouchableOpacity
              key={"568"}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Image source={require("../images/close.svg")} />
            </TouchableOpacity>
          </View>
        </Modal>
        <Swiper
          style={styles.imgSwiper}
          showsButtons={false}
          dotColor={"#ffffff"}
          dotStyle={styles.simpleDots}
          activeDotStyle={styles.activeDots}>
          {
            detailData.listImages.map((imge)=>{
              return(
                <ImageBackground
                  style={styles.imageSwiper}
                  source={imge}
                />
              );
            })

          }

        </Swiper>


        <View
          style={styles.details}>
          <Text
            style={styles.liveTitle}>
            {detailData.titleLive}
          </Text>

          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={like}>
              <Image style={{ marginRight: 20 }} source={likeimg.img} />
            </TouchableOpacity>

            <TouchableOpacity onPress={myCustomShare}>
              <Image source={require("../images/share.svg")} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}>
          <Text style={styles.textEnLive}>En live</Text>
          <View
            style={styles.enLiveDot}
          />
        </View>
        <HorizontalImageCard
          props={{
            width: Dimensions.get("window").width * 0.45,
            height: Dimensions.get("window").width * 0.45,
            title: "Hobba",
          }}
          informations={listCamera}
          screen={"signup"}
        />

        <Text
          style={styles.aproposTitle}>
          A propos de cet évennement
        </Text>
        <Text style={styles.aproposDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. of the printing and typesetting industry.
        </Text>
        <Text
          style={styles.aproposTitle}>
          A propos de l'artiste
        </Text>

        <HorizontalImageCard
          props={{
            width: 120,
            height: 120,
            title: "Hobba",
          }}
          informations={[{ id: 0, img: require("../images/image1.jpg") }]}
          screen={"signup"}
        />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  imgSwiper: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  modalContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    justifyContent: "center",
    padding: 20,
    margin: 0,
  },
  modalWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 40,
    padding: 10,
    margin: 0,
    height: 80,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  modalInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  modalText: {
    fontWeight: "bold",
  },
  activeDots: {
    backgroundColor: "#000000",
    borderWidth: 2,
    borderColor: "#ffffff",
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  simpleDots: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  imageSwiper: {
    height: 200,
    width: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  liveTitle: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "#ffffff",
    width: "50%",
    fontSize: 16,
  },
  actionContainer: {
    display: "flex",
    flexDirection: "row",
  },
  textEnLive: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  enLiveDot: {
    width: 3,
    height: 3,
    backgroundColor: "red",
    marginLeft: 15,
    marginBottom: 30,
    borderRadius: 10,
  },
  aproposTitle: {
    margin: 10,
    marginTop: 20,
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  aproposDescription: {
    padding: 10,
    color: "#ffffff",
    lineHeight: 25,
  },
});

export default LiveDetail;
