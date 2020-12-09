import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

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
  /* TITLE STYLES */
  title: {
    width: width,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
  },
  progressBarComponent: {
    width: width,
    height: 100,
    marginTop: 20,
  },
  /* PROGRESS CONTROL STYLES */
  progressInput: {
    width: width,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  progressTextInput: {
    width: width / 1.5,
    borderBottomWidth: 0.5,
    borderColor: Colors.silver,
    textAlign: 'center',
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  progressLabel: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    paddingTop: 5,
  },
});

class ProgressBarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '0',
      progress: 0,
    };
  }

  render() {
    const {inputValue, progress} = this.state;
    const {viewName} = this.props;

    return (
      <View style={styles.mainContainer}>
        {/*HEADER */}
        <Header viewName={viewName} elevation={5} />

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            {/* TITLE */}
            <View style={styles.title}>
              <Text style={styles.titleText}>
                {'Testing the ProgressBar component'}
              </Text>
            </View>

            {/* PROGRESS CONTROL */}
            <View style={styles.progressInput}>
              <TextInput
                value={inputValue}
                onChangeText={(text) => this.setState({inputValue: text})}
                onSubmitEditing={() =>
                  this.setState({progress: parseFloat(inputValue, 10)})
                }
                keyboardType={'numeric'}
                style={styles.progressTextInput}
              />
              <Text style={styles.progressLabel}>{'Enter a number'}</Text>
            </View>

            {/* ProgressBar COMPONENT */}
            <View style={styles.progressBarComponent}>
              <ProgressBar
                barWidth={200}
                barHeight={25}
                percentage={progress}
                colors={['white', Colors.cerulean]}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default ProgressBarView;
