import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Colors from '../../constants/Colors';

/* STYLES */
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  track: {
    borderWidth: 2,
    borderColor: 'gray',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumb: {
    borderWidth: 0.5,
    borderColor: 'gray',
    elevation: 6,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbImage: {
    borderRadius: 360,
    resizeMode: 'contain',
  },
});

function CustomSwitch(props) {
  const {
    width,
    height,
    trackColor,
    thumbImage,
    thumbColor,
    switchValue,
    getSwitchValue,
  } = props;
  const [value, setValue] = React.useState(switchValue || false);

  const trackWidth = width || 90;
  const trackHeight = height || 40;
  const finalTrackColor = trackColor
    ? value
      ? trackColor.true
      : trackColor.false
    : value
    ? 'black'
    : 'white';

  const trackStyles = {
    width: trackWidth,
    height: trackHeight,
    borderRadius: trackWidth / 4,
    backgroundColor: finalTrackColor,
  };

  const thumbStyles = {
    width: trackHeight + 10,
    height: trackHeight + 10,
    borderRadius: 360,
    backgroundColor: thumbColor || 'white',
  };

  const thumbImageStyles = {
    width: trackHeight + 5,
    height: trackHeight + 5,
  };

  const thumbPosition = value ? {right: -5} : {left: -5};

  const onValueChange = () => {
    setValue(!value);
    getSwitchValue(!value);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.track, trackStyles]}>
        <TouchableOpacity
          style={[styles.thumb, thumbStyles, thumbPosition]}
          onPress={() => onValueChange()}
          activeOpacity={0.9}>
          {thumbImage && (
            <Image
              style={[styles.thumbImage, thumbImageStyles]}
              source={value ? thumbImage.true : thumbImage.false}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomSwitch;
