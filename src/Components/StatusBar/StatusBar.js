import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

const Statusbar = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={props.color} />
    </>
  );
};

const styles = StyleSheet.create({});

export default Statusbar;
