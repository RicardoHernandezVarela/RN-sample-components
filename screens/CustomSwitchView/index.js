import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../../components/Header';
import CustomSwitch from '../../components/CustomSwitch';
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
  },
  content: {
    width: width,
    height: height - 55,
    backgroundColor: 'white',
  },
  customSwitchContainer: {
    width: width,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  switchStateContainer: {
    width: width,
    height: 100,
    alignItems: 'center',
  },
  switchState: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.cerulean,
  },
});

class CustomSwitchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
    };
  }

  render() {
    const {switchValue} = this.state;
    const {viewName, componentId} = this.props;

    /* FOR DARKMODE TEST */
    const backgroundColor = switchValue
      ? {backgroundColor: 'black'}
      : {backgroundColor: 'white'};

    return (
      <View style={styles.mainContainer}>
        {/*HEADER */}
        <Header viewName={viewName} elevation={5} componentId={componentId} />

        {/* CONTENT */}
        <View style={styles.content}>
          {/* TITLE */}
          <ViewTitle title={'Testing the CustomSwitch component'} />

          {/* CUSTOM SWITCH */}
          <View style={styles.customSwitchContainer}>
            <CustomSwitch
              width={90}
              height={40}
              trackColor={{true: Colors.eagleGreen, false: Colors.redNcs}}
              thumbImage={{
                true: {uri: 'https://i.ibb.co/pZTN5Cy/logo192.png'},
                false: {uri: 'https://i.ibb.co/16ysGpw/dropss.jpg'},
              }}
              getSwitchValue={(value) => this.setState({switchValue: value})}
            />
          </View>

          {/* SWITCH STATE */}
          <View style={styles.switchStateContainer}>
            <Text style={styles.switchState}>
              {switchValue ? 'TRUE' : 'FALSE'}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CustomSwitchView;
