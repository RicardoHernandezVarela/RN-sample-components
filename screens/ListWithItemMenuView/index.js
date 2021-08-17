import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../../components/Header';
import ViewTitle from '../../components/ViewTitle';
import Icon from '../../components/Icon';
import ListWithItemMenu from '../../components/ListWithItemMenu';
import DeviceLayout from '../../constants/DeviceLayout';
import Colors from '../../constants/Colors';

const width = DeviceLayout.window.width;
const height = DeviceLayout.window.height;
const itemHeight = 60;

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
  listItem: {
    width: width,
    height: itemHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.5,
    borderColor: Colors.gray,
  },
  itemText: {
    width: width / 1.2,
    marginLeft: 15,
  },
});

const listData = [
  {
    text: '1',
  },
  {
    text: '2',
  },
  {
    text: '3',
  },
  {
    text: '4',
  },
  {
    text: '5',
  },
  {
    text: '6',
  },
  {
    text: '7',
  },
  {
    text: '8',
  },
  {
    text: '9',
  },
  {
    text: '10',
  },
  {
    text: '1',
  },
  {
    text: '2',
  },
  {
    text: '3',
  },
  {
    text: '4',
  },
  {
    text: '5',
  },
  {
    text: '6',
  },
  {
    text: '7',
  },
  {
    text: '8',
  },
  {
    text: '9',
  },
  {
    text: '10',
  },
];

class ListWithItemMenuView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastIndex: listData.length - 1,
      itemSelected: {},
      optionSelected: false,
    };

    this.menuOptionsText = ['Edit', 'Delete', 'Save'];
    this.menuOptions = [
      {
        text: this.menuOptionsText[0],
        icon: 'options',
        onPress: () => this.onOptionSelected(this.menuOptionsText[0]),
      },
      {
        text: this.menuOptionsText[1],
        icon: 'back_arrow',
        onPress: () => this.onOptionSelected(this.menuOptionsText[1]),
      },
      {
        text: this.menuOptionsText[2],
        icon: 'options',
        onPress: () => this.onOptionSelected(this.menuOptionsText[2]),
      },
    ];
  }

  returnListItem = (item, setShowContextMenu) => (
    <Item
      item={item}
      setShowContextMenu={setShowContextMenu}
      setItemSelected={(itemS) => this.setState({itemSelected: itemS})}
      setOptionSelected={(option) => this.setState({optionSelected: option})}
    />
  );

  onOptionSelected = (option) => {
    const itemIndex = this.state.itemSelected.index;
    console.log(option, itemIndex);
    this.setState({optionSelected: true});
  };

  render() {
    const {viewName, componentId} = this.props;
    const {lastIndex, itemSelected, optionSelected} = this.state;

    return (
      <View style={styles.mainContainer}>
        {/*HEADER */}
        <Header viewName={viewName} elevation={5} componentId={componentId} />

        {/* CONTENT */}
        <View style={styles.content}>
          <View style={{flex: 1}}>
            {/* TITLE */}
            <ViewTitle title={'Testing the ListWithItemMenu component'} />

            <ListWithItemMenu
              data={listData}
              ListItem={(item, setShowContextMenu) =>
                this.returnListItem(item, setShowContextMenu)
              }
              lastIndex={lastIndex}
              menuOptions={this.menuOptions}
              itemSelected={itemSelected}
              itemHeight={
                itemSelected.index === lastIndex
                  ? itemHeight * 0.98
                  : itemHeight
              }
              initialValue={itemHeight / 1.5}
              optionSelected={optionSelected}
            />
          </View>
        </View>
      </View>
    );
  }
}

const Item = ({
  item,
  setShowContextMenu,
  setItemSelected,
  setOptionSelected,
}) => {
  const topItemStyles = {
    borderTopWidth: 0.5,
  };

  return (
    <View style={[styles.listItem, item.index === 0 ? topItemStyles : null]}>
      <Text style={styles.itemText}>{`Item: ${item.text}`}</Text>
      <Icon
        name="options"
        onPress={() => {
          setShowContextMenu();
          setItemSelected(item);
          setOptionSelected(false);
        }}
      />
    </View>
  );
};

export default ListWithItemMenuView;
