import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';

import Header from '../../components/Header';
import ViewTitle from '../../components/ViewTitle';
import ProgressBarSemiCircle from '../../components/ProgressBarSemiCircle';
import {ProgressControl, Notification} from '../../screens/ProgressBarView';
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
    backgroundColor: 'white',
  },
  progressBarSemiCircle: {
    marginTop: 20,
  },
});

class ProgressBarSemiCircleView extends React.Component {
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
        <Header viewName={viewName} elevation={5} />

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.contentContainer}>
            {/* TITLE */}
            <ViewTitle title={'Testing the ProgressBarSemiCircle component'} />

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

            <View style={styles.progressBarSemiCircle}>
              <ProgressBarSemiCircle progress={progress} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default ProgressBarSemiCircleView;
