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
import ViewTitle from '../../components/ViewTitle';
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
  contentContainer: {
    width: width,
    height: height - 55,
  },
  /* progressBarComponent STYLES */
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
  /* NOTIFICATION STYLES */
  notification: {
    width: width,
    marginTop: 15,
    marginBottom: 0,
  },
  notificationText: {
    fontSize: 14,
    fontWeight: 'bold',
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
          <View style={styles.contentContainer}>
            {/* TITLE */}
            <ViewTitle title={'Testing the ProgressBar component'} />

            {/* PROGRESS CONTROL */}
            <ProgressControl
              inputValue={inputValue}
              onChangeText={(text) => this.setState({inputValue: text})}
              onSubmitEditing={() => {
                const value = parseFloat(inputValue, 10);

                if (value < 0 || value > 100) {
                  this.setState({progress: null});
                } else {
                  this.setState({progress: value});
                }
              }}
            />

            {/* NOTIFICATION */}
            {progress === null && <Notification />}

            {/* ProgressBar COMPONENT */}
            <View style={styles.progressBarComponent}>
              <ProgressBar
                barWidth={200}
                barHeight={25}
                percentage={progress ? progress : 0}
                colors={['white', Colors.cerulean]}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const ProgressControl = ({inputValue, onChangeText, onSubmitEditing}) => {
  return (
    <View style={styles.progressInput}>
      <TextInput
        value={inputValue}
        onChangeText={(text) => onChangeText(text)}
        onSubmitEditing={() => onSubmitEditing()}
        keyboardType={'numeric'}
        style={styles.progressTextInput}
      />
      <Text style={styles.progressLabel}>{'Enter a number'}</Text>
    </View>
  );
};

const Notification = () => {
  return (
    <View style={styles.notification}>
      <Text style={styles.notificationText}>
        {'Please enter a value between 0 and 100'}
      </Text>
    </View>
  );
};

export {ProgressControl, Notification};

export default ProgressBarView;
