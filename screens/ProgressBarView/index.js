import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../../components/Header';
import ProgressBar from '../../components/ProgressBar';

import DeviceLayout from '../../constants/DeviceLayout';
import Colors from '../../constants/Colors';

const width = DeviceLayout.window.width;
const height = DeviceLayout.window.height;

/* STYLES */
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    height: height,
    backgroundColor: 'white',
  },
  progressBarComponent: {
    width: width,
    height: height - 55,
  },
});

class ProgressBarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {viewName} = this.props;

    return (
      <View style={styles.mainContainer}>
        <Header viewName={viewName} elevation={5} />

        {/* ProgressBar COMPONENT */}
        <View style={styles.progressBarComponent}>
          <ProgressBar
            barWidth={200}
            barHeight={25}
            percentage={95}
            colors={['white', Colors.cerulean]}
          />
        </View>
      </View>
    );
  }
}

export default ProgressBarView;
