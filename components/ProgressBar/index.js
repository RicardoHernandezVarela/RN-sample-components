import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

/* STYLES */
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBar: {
    borderWidth: 0.5,
    borderColor: Colors.silver,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  movingBar: {
    position: 'absolute',
    elevation: 5,
  },
  percentageContainer: {
    width: '100%',
    height: 25,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});

function ProgressBar(props) {
  const {barWidth, barHeight, percentage, colors} = props;

  const progress = Math.min(Math.max(percentage, 0), 100) / 100;

  const mainBarStyles = {
    width: barWidth,
    height: barHeight,
    backgroundColor: colors[0],
  };

  const movingBarStyles = {
    width: barWidth,
    height: barHeight,
    backgroundColor: colors[1],
    right: barWidth - barWidth * progress,
  };

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.mainBar, mainBarStyles]}>
        <View style={[styles.movingBar, movingBarStyles]} />
      </View>

      {/* PERCENTAGE VALUE */}
      <View style={styles.percentageContainer}>
        <Text style={styles.percentage}>{`${Math.round(
          progress * 100,
        )}%`}</Text>
      </View>
    </View>
  );
}

export default ProgressBar;
