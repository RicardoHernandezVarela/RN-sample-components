import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

import Header from '../../components/Header';
import DeviceLayout from '../../constants/DeviceLayout';

import componentsList from './ComponentsList';

const width = DeviceLayout.window.width;
const height = DeviceLayout.window.height;
const titleContainerHeight = 120;
const sampleComponentHeight = 60;

/* STYLES */
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  content: {
    width: width,
    height: height - 55,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  /* TITLE STYLES */
  titleContainer: {
    width: width,
    height: titleContainerHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  /* COMPONENTS LIST STYLES */
  componentsListContainer: {
    width: width,
    height: height - 55 - titleContainerHeight,
    backgroundColor: 'white',
  },
  componentsList: {
    flex: 1,
    backgroundColor: 'white',
  },
  sampleComponent: {
    width: width,
    height: sampleComponentHeight,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sampleComponentName: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'My Sample Components',
      sampleComponents: componentsList,
    };
  }

  goToView = (view) => {
    console.log('goToView', `${view}View`);
    const toView = `${view}View`;

    Navigation.push(this.props.componentId, {
      component: {
        name: toView,
        passProps: {
          viewName: view,
        },
      },
    });
  };

  render() {
    const {viewName, sampleComponents} = this.state;

    return (
      <View style={styles.mainContainer}>
        <Header viewName={viewName} elevation={5} />

        {/* CONTENT */}
        <View style={styles.content}>
          {/* TITLE */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{`${viewName} List`}</Text>
          </View>

          {/* SAMPLE COMPONENTS LIST */}
          <View style={styles.componentsListContainer}>
            <FlatList
              data={sampleComponents}
              renderItem={({item, index}) => (
                <TouchableOpacity onPress={() => this.goToView(item.viewName)}>
                  <Item item={{...item, index}} />
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => item.viewName}
              style={styles.componentsList}
            />
          </View>
        </View>
      </View>
    );
  }
}

const Item = ({item}) => {
  return (
    <View style={styles.sampleComponent}>
      <Text style={styles.sampleComponentName}>{item.viewName}</Text>
    </View>
  );
};

export default Home;
