import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

import Icon from '../Icon';
import DeviceWidth from '../../constants/DeviceLayout';

const width = DeviceWidth.window.width;

/* STYLES */
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    height: 55,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrowContainer: {
    width: '20%',
    alignItems: 'center',
  },
  viewName: {
    width: '60%',
    alignItems: 'center',
  },
  viewNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  rightContainer: {
    width: '20%',
    alignItems: 'center',
  },
});

function Header(props) {
  const {viewName, elevation, componentId} = props;

  /* GO BACK */
  const goBack = () => {
    Navigation.pop(componentId, {
      component: {
        name: `${viewName}View`,
      },
    });
  };

  return (
    <View style={[styles.mainContainer, {elevation: elevation || 0}]}>
      <View style={styles.backArrowContainer}>
        <Icon name={'back_arrow'} onPress={() => goBack()} />
      </View>
      <View style={styles.viewName}>
        <Text style={styles.viewNameText}>{viewName}</Text>
      </View>
      <View style={styles.rightContainer} />
    </View>
  );
}

export default Header;
