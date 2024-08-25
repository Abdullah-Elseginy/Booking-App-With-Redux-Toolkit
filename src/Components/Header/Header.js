/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: '#0ff',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity style={{}}>
        <Icon name={'keyboard-arrow-left'} size={35} color={'#000'} />
      </TouchableOpacity>
      <Text
        style={{
          color: '#000',
          fontWeight: '600',
          fontSize: RFPercentage(2.4),
        }}>
        Property Details
      </Text>
      <View></View>
    </View>
  );
};

export default Header;
