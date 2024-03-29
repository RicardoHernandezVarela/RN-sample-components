import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../../components/Header';
import ViewTitle from '../../components/ViewTitle';
import Icon from '../../components/Icon';
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
  iconContainer: {
    width: width,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.cerulean,
    marginTop: 10,
  },
});

class IconView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {viewName, componentId} = this.props;

    return (
      <View style={styles.mainContainer}>
        {/*HEADER */}
        <Header viewName={viewName} elevation={5} componentId={componentId} />

        {/* CONTENT */}
        <View style={styles.content}>
          {/* TITLE */}
          <ViewTitle title={'Testing the Icon component'} />

          {/* TOP ICON */}
          <View style={styles.iconContainer}>
            <Icon
              name={'options'}
              onPress={() => console.log('Top Icon Pressed')}
              border
              elevation
            />
            <Text style={styles.iconType}>{'Border and elevation'}</Text>
          </View>

          {/* BOTTOM ICON */}
          <View style={styles.iconContainer}>
            <Icon
              name={'options'}
              onPress={() => console.log('Bottom Icon Pressed')}
            />
            <Text style={styles.iconType}>{'No border, No elevation'}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default IconView;
