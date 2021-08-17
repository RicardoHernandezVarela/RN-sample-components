import React from 'react';
import {View, StyleSheet} from 'react-native';

import Icon from '../Icon';

/* STYLES */
const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 360,
  },
});

function BackToTopButton(props) {
  const {listRef, resetOffset, viewOffset} = props;

  const scrollToTop = () => {
    if (listRef) {
      listRef.scrollToIndex({
        index: 0,
        viewPosition: 0,
        viewOffset: viewOffset ? viewOffset : 0,
        animated: true,
      });

      resetOffset();
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Icon name={'top'} onPress={() => scrollToTop()} border />
    </View>
  );
}

export default BackToTopButton;
