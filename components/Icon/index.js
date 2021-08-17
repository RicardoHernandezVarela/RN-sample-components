import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import iconDir from './iconDir';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  content: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 0.5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    elevation: 5,
  },
  icon: {
    width: '100%',
    height: '100%',
    marginTop: 7,
  },
});

function Icon({name, onPress, border, elevation}) {
  const iconStyles = {
    borderColor: border ? Colors.gray : 'transparent',
    elevation: elevation ? 5 : 0,
  };

  return (
    <TouchableOpacity
      style={[styles.content, iconStyles]}
      activeOpacity={onPress ? 0.3 : 1}
      onPress={onPress}>
      <Image source={iconDir[name]} style={styles.icon} />
    </TouchableOpacity>
  );
}

export default Icon;
