import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import DeviceWidth from '../../constants/DeviceLayout';

/* STYLES */
const styles = StyleSheet.create({
	mainContainer: {},
});

const width = DeviceWidth.window.width;
const height = DeviceWidth.window.height;

function Header(props) {
  const {viewName} = props;

  return (
    <View>
      <Text>{viewName}</Text>
    </View>
  );
}

export default Header;
