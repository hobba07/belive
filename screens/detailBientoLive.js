import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import Share from 'react-native-share';

function detailBientoLive({route}) {
  const detailData = route.params;
  const [likeimg, setLikeImg] = useState({
    img: require('../images/heart.svg'),
    isLiked: false,
  });
  const myCustomShare = async () => {
    const shareOptions = {
      message:
        "Music band ...",
      // urls: [files.image1, files.image2]
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setTimeout(function () {
      setModalVisible(false);
    }, 2000);
  };

  const like = () => {
    if (likeimg.isLiked == false) {
      setLikeImg({
        img: require('../images/heart_pink.svg'),
        isLiked: true,
      });
      toggleModal();
    } else {
      setLikeImg({
        img: require('../images/heart.svg'),
        isLiked: false,
      });
    }
  };
  return (
    <LinearGradient
      colors={['#21224A', '#21224A', '#21224A', '#321036', '#321036']}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Modal
        isVisible={isModalVisible}
        style={styles.modalContainer}
        animationIn={'slideInDown'}
        animationOut={'slideOutUp'}>
        <View
          style={styles.modalWrapper}>
          <View
            style={styles.modalInfo}>
            <Image
              style={{marginRight: 20}}
              source={require('../images/checked.png')}
            />
            <Text style={styles.modalText}>
              Live épinglé dans vos favoris{' '}
            </Text>
          </View>
          <TouchableOpacity
            key={'568'}
            onPress={() => {
              setModalVisible(false);
            }}>
            <Image source={require('../images/close.svg')} />
          </TouchableOpacity>
        </View>
      </Modal>
      <ImageBackground
        style={styles.headerImage}
        source={detailData.img}>
        <LinearGradient
          colors={['#906C7F80', '#3B223E80', '#21224A']}
          style={styles.headerGradient}
        />
      </ImageBackground>
      <View
        style={styles.headerDetail}>
        <View>
          <Text
            style={styles.livesTitle}>
            {detailData.title}
          </Text>
          <Text style={{width: '70%', color: '#ffffff'}}>
            {detailData.description}
          </Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={like}>
            <Image style={{marginRight: 20}} source={likeimg.img} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('hobba');
            }}>
            <Image
              style={{marginRight: 20}}
              source={require('../images/gift.svg')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={myCustomShare}>
            <Image source={require('../images/share.svg')} />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={styles.chooseTitle}>
        Choisissez une option de réservation
      </Text>
      <View style={styles.optreservation}>
        <Text style={styles.optreservationText}>
          Assister au concert
        </Text>
        <Image style source={require('../images/info.svg')} />
      </View>
      <View style={styles.optreservation}>
        <Text style={styles.optreservationText}>
          Visionner le live gratuitement{' '}
        </Text>
        <Image style source={require('../images/info.svg')} />
      </View>
      <View style={styles.optreservation}>
        <Text style={styles.optreservationText}>
          Visionner le live en mode VIP
        </Text>
        <Image style source={require('../images/info.svg')} />
      </View>
      <View style={styles.optreservation}>
        <Text style={styles.optreservationText}>
          Visionner entre amis
        </Text>
        <Image style source={require('../images/info.svg')} />
      </View>
      <Text style={[styles.chooseTitle,{marginTop:30}]}>
        A propos de cet article
      </Text>
      <Text style={styles.aproposText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    position: 'relative',
  },
  optreservation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    paddingRight: 20,
    borderBottomColor: '#9DA5AD',
    borderBottomWidth: 2,
    paddingBottom: 20,
  },
  modalContainer:{
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    padding: 20,
    margin: 0,
  },
  modalWrapper:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 40,
    padding: 10,
    margin: 0,
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  modalInfo:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalText: {
    fontWeight: 'bold'
  },
  headerImage:{
    height: 200,
    width: Dimensions.get('window').width,
    position: 'relative',
  },
  headerGradient:{
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  headerDetail:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
  },
  iconsContainer:{
    display: 'flex',
    flexDirection: 'row'
  },
  liveTitle:{
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  chooseTitle:{
    color: '#9DA5AD',
    marginLeft: 10,
    fontSize: 12,
    marginBottom: 10,
  },
  optreservationText:{
    fontWeight: 'bold',
    color: '#ffffff'
  },
  aproposText:{
    marginLeft: 10,
    color: '#ffffff',
    lineHeight:25
  },
  livesTitle:{
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    width: '50%',
    fontSize: 16,
  }
});
export default detailBientoLive;
