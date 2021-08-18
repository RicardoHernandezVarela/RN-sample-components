import React from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';

import Icon from '../Icon';
import Colors from '../../constants/Colors';

/* STYLES */
const styles = StyleSheet.create({
  menu: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 7,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    overflow: 'hidden',
  },
  menuOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuOptionContainerWithIcon: {
    paddingRight: 10,
    paddingLeft: 0,
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    paddingRight: 5,
    paddingLeft: 5,
  },
  menuText: {
    fontSize: 12,
    color: Colors.gray,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
});

function ItemMenu(props) {
  const {
    options,
    useIcons,
    fixedPosition,
    rightSpace,
    itemIndex,
    itemHeight,
    lastIndex,
    contentOffsetY,
    initialValue,
    underlayColor,
  } = props;

  /* GET TOP POSITION FOR ITEM MENU */
  const getMenuTopPosition = () => {
    const value = (itemIndex + 1) * itemHeight;
    const adjusment = itemIndex === lastIndex ? itemHeight : initialValue;
    const finalPosition = value - Math.ceil(contentOffsetY) - adjusment;
    return itemIndex === lastIndex ? finalPosition - 20 : finalPosition;
  };

  /* MENU POSITION STYLES */
  let menuPosition = {
    position: 'absolute',
    right: rightSpace ? rightSpace : 5,
    top: fixedPosition || getMenuTopPosition() || 0,
  };

  return (
    <View style={[styles.menu, menuPosition]}>
      {options.map((item, index) => {
        return (
          <TouchableHighlight
            activeOpacity={1}
            underlayColor={underlayColor || Colors.platinum}
            style={[
              styles.menuOptionContainer,
              useIcons ? styles.menuOptionContainerWithIcon : null,
            ]}
            onPress={() => (item.onPress ? item.onPress() : null)}
            key={index}>
            <View style={[styles.menuOption, {minWidth: useIcons ? 100 : 150}]}>
              {useIcons && <Icon name={item.icon} />}
              <Text style={styles.menuText}>{item.text}</Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}

export default ItemMenu;
