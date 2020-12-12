import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

/* STYLES */
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  outterCircle: {
    borderWidth: 1,
    borderColor: Colors.silver,
    alignItems: 'center',
    elevation: 5,
  },
  innerCirlce: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    position: 'absolute',
    bottom: 0,
  },
  movingCircle: {
    alignItems: 'center',
    elevation: 5,
  },
  percentageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.silver,
    borderRadius: 360,
    elevation: 3,
  },
  percentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});

function ProgressBarSemiCircle(props) {
  const {
    radius,
    progressBarWidth,
    progress,
    barColor,
    backgroundColor,
    innerColor,
  } = props;

  const realProgressBarWidth = progressBarWidth || 10;
  const realRadius = radius || 150;
  const innerRadius = realRadius - realProgressBarWidth;
  const percentage = Math.min(Math.max(progress, 0), 100);
  const degrees = (180 * percentage) / 100 || 0;

  const Styles = {
    mainContainer: {
      height: realRadius,
      overflow: 'hidden',
    },
    outterCircleStyles: {
      width: realRadius * 2,
      height: realRadius,
      borderTopLeftRadius: realRadius,
      borderTopRightRadius: realRadius,
      backgroundColor: backgroundColor || Colors.aquamarine,
    },
    innerCirlce: {
      width: innerRadius * 2,
      height: innerRadius,
      borderTopLeftRadius: innerRadius,
      borderTopRightRadius: innerRadius,
      backgroundColor: innerColor || 'white',
    },
    movingCircle: {
      width: realRadius * 2,
      height: realRadius,
      backgroundColor: barColor || Colors.cerulean,
      borderBottomLeftRadius: realRadius,
      borderBottomRightRadius: realRadius,
      transform: [
        {translateY: -realRadius / 2},
        {rotate: `${degrees}deg`},
        {translateY: realRadius / 2},
      ],
    },
  };

  return (
    <View style={[styles.mainContainer, Styles.mainContainer]}>
      {/* OUTTER CIRCLE */}
      <View style={[styles.outterCircle, Styles.outterCircleStyles]} />

      {/* MOVING CIRCLE */}
      <View style={[styles.movingCircle, Styles.movingCircle]} />

      {/* INNER CIRCLE */}
      <View style={[styles.innerCirlce, Styles.innerCirlce]}>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentage}>{`${percentage}%`}</Text>
        </View>
      </View>
    </View>
  );
}

export default ProgressBarSemiCircle;
