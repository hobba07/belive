import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image,StyleSheet } from "react-native";
import PropTypes from 'prop-types';

export default class SMConnect extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.enableIcon) {
      return (

        <View
          backgroundColor={this.props.backgroundColor}
          style={styles.btnConnectSM}>

          <TouchableOpacity
            onPress={this.props.onPress}
            style={styles.toConnectSM}>
            <Image style={{marginLeft:20,marginRight:20}}  source={this.props.icon}/>
            <Text style={{ color: this.props.textColor, fontSize: this.props.textSize ,fontWeight:"bold"}}>{this.props.text}</Text>

          </TouchableOpacity>
        </View>

      );
    } else {
      return (

        <View
          backgroundColor={this.props.backgroundColor}
          style={styles.btnConnect}>

          <TouchableOpacity
            onPress={this.props.onPress}
            style={styles.toConnect}>

            <Text style={{ color: this.props.textColor, fontSize: this.props.textSize }}>{this.props.text}</Text>

          </TouchableOpacity>
        </View>

      );
    }

  }
}
const styles = StyleSheet.create({
  btnConnectSM: {
    width: "100%",
    marginTop: 15,
    display: 'flex',
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  toConnectSM: {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
SMConnect.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  textColor: PropTypes.any,
  backgroundColor: PropTypes.any,
  textSize: PropTypes.number,
  enableIcon: PropTypes.bool,
  icon: PropTypes.any
};