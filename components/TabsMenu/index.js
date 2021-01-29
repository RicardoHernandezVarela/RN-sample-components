import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import DeviceLayout from '../../constants/DeviceLayout';
import Colors from '../../constants/Colors';

const width = DeviceLayout.window.width;
const height = DeviceLayout.window.height;

/* STYLES */
const styles = StyleSheet.create({
  optionsContainer: {
    width: width,
    height: 30,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: Colors.gray,
  },
  option: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  optionText: {
    width: '100%',
    textAlign: 'center',
  },
});

function TabsMenu(props) {
  const {options, optionsColor, selected, select} = props;

  return (
    <View style={styles.optionsContainer}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            {width: width / options.length},
            {
              borderColor: selected === index ? optionsColor.true : 'white',
            },
          ]}
          onPress={() => (select ? select(index) : null)}>
          <Text
            style={[
              styles.optionText,
              {
                color:
                  selected === index ? optionsColor.true : optionsColor.false,
              },
            ]}>
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default TabsMenu;
