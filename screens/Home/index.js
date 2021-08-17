import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import Header from '../../components/Header';
import DeviceLayout from '../../constants/DeviceLayout';
import Colors from '../../constants/Colors';

import componentsList from './ComponentsList';

const width = DeviceLayout.window.width;
const height = DeviceLayout.window.height;
const titleContainerHeight = 200;
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
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  /* TITLE STYLES */
  titleContainer: {
    width: width,
    height: titleContainerHeight,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  imgContainer: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: Colors.silver,
    borderRadius: 360,
    elevation: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderWidth: 0.5,
    borderColor: Colors.silver,
    borderRadius: 360,
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
    height: height - titleContainerHeight,
    backgroundColor: 'white',
    flex: 1,
  },
  componentsList: {
    flex: 1,
    backgroundColor: 'white',
  },
  sampleComponent: {
    width: width,
    height: sampleComponentHeight,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  sampleComponentName: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});

const img = 'https://rickvareladev.web.app/static/media/rvlogo.5ddf8975.png';

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
          componentId: this.props.componentId,
        },
      },
    });
  };

  render() {
    const {viewName, sampleComponents} = this.state;

    return (
      <View style={styles.mainContainer}>
        {/* CONTENT */}
        <View style={styles.content}>
          {/* TITLE */}
          <View style={styles.titleContainer}>
            <View style={styles.imgContainer}>
              <Image style={styles.img} source={{uri: img}} />
            </View>

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
