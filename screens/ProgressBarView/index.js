import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../../components/Header';
import ProgressBar from '../../components/ProgressBar';

import DeviceLayout from '../../constants/DeviceLayout';

const width = DeviceLayout.window.width;
const height = DeviceLayout.window.height;

/* STYLES */
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    height: height,
    backgroundColor: 'white',
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
        <ProgressBar />
      </View>
    );
  }
}

export default ProgressBarView;
