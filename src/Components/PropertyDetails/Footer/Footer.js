/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../Styles';

export const Footer = () => {
  return (
    <>
      <View style={styles.FooterContainer}>
        <TouchableOpacity style={styles.Back}>
          <Text style={styles.TextFooter}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Back, styles.Next]}>
          <Text style={[styles.TextFooter, {color: '#fff'}]}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
