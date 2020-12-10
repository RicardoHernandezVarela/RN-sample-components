import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import DeviceLayout from '../../constants/DeviceLayout';

const width = DeviceLayout.window.width;

/* STYLES */
const styles = StyleSheet.create({
  /* TITLE STYLES */
  title: {
    width: width,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
  },
});

function ViewTitle(props) {
  const {title} = props;

  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}

export default ViewTitle;
