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
  Button,
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
        "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
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
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'absolute',
          top: 0,
          justifyContent: 'center',
          padding: 20,
          margin: 0,
        }}
        animationIn={'slideInDown'}
        animationOut={'slideOutUp'}>
        <View
          style={{
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
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{marginRight: 20}}
              source={require('../images/checked.png')}
            />
            <Text style={{fontWeight: 'bold'}}>
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
        style={{
          height: 200,
          width: Dimensions.get('window').width,
          position: 'relative',
        }}
        source={detailData.img}>
        <LinearGradient
          colors={['#906C7F80', '#3B223E80', '#21224A']}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </ImageBackground>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: 10,
          marginBottom: 20,
        }}>
        <View>
          <Text
            style={{marginBottom: 10, fontWeight: 'bold', color: '#ffffff'}}>
            {detailData.title}
          </Text>
          <Text style={{width: '70%', color: '#ffffff'}}>
            {detailData.description}
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
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
        style={{
          color: '#9DA5AD',
          marginLeft: 10,
          fontSize: 12,
          marginBottom: 10,
        }}>
        Choisissez une option de réservation
      </Text>
      <View style={styles.optreservation}>
        <Text style={{fontWeight: 'bold', color: '#ffffff'}}>
          Assister au concert
        </Text>
        <Image style source={require('../images/info.svg')} />
      </View>
      <View style={styles.optreservation}>
        <Text style={{fontWeight: 'bold', color: '#ffffff'}}>
          Visionner le live gratuitement{' '}
        </Text>
        <Image style source={require('../images/info.svg')} />
      </View>
      <View style={styles.optreservation}>
        <Text style={{fontWeight: 'bold', color: '#ffffff'}}>
          Visionner le live en mode VIP
        </Text>
        <Image style source={require('../images/info.svg')} />
      </View>
      <View style={styles.optreservation}>
        <Text style={{fontWeight: 'bold', color: '#ffffff'}}>
          Visionner entre amis
        </Text>
        <Image style source={require('../images/info.svg')} />
      </View>
      <Text style={{margin: 10, marginTop: 20, color: '#9DA5AD', fontSize: 12}}>
        A propos de cet article
      </Text>
      <Text style={{marginLeft: 10, color: '#ffffff'}}>
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
});
export default detailBientoLive;
