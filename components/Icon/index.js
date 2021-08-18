import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import iconDir from './iconDir';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  content: {
    borderRadius: 100,
    borderWidth: 0.5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 5,
  },
  icon: {
    width: '100%',
    height: '100%',
    marginTop: 7,
  },
});

/**
 * @param {string} name Icon name / Image
**/

function Icon({name, onPress, border, elevation, bgColor, iconSize}) {
  const iconStyles = {
    width: iconSize || 45,
    height: iconSize || 45,
    backgroundColor: bgColor || 'transparent',
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
