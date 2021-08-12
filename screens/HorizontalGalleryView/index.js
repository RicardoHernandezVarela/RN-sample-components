import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import Header from '../../components/Header';
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
    alignItems: 'center',
  },
  /* GALLERY STYLES */
  gallery: {
    width: width,
    height: 250,
  },
  galleryItem: {
    width: width,
    height: 250,
    alignItems: 'center',
  },
  img: {
    width: width,
    height: '90%',
    resizeMode: 'contain',
    borderWidth: 0.5,
    borderColor: Colors.gray,
  },
  imgTitle: {
    width: '100%',
    height: '10%',
  },
  /* IMG SELECTOR STYLES */
  imgSelectorContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 250,
  },
  imgSelector: {
    width: 15,
    height: 15,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    borderRadius: 360,
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  imgSelectorcontent: {
    width: '90%',
    height: '90%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 360,
  },
});

class HorizontalGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [
        {
          title: 'IMG 1',
          img:
            'https://i.picsum.photos/id/1049/200/300.jpg?hmac=IwgFpI60m03JoXBvIB_0oA12YR8cNaSel6lUvKhQvF0',
        },
        {
          title: 'IMG 2',
          img:
            'https://i.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
        },
        {
          title: 'IMG 3',
          img:
            'https://i.picsum.photos/id/768/200/300.jpg?hmac=lFX2oZVTUayugh_YZQ5q6uoXJFYaOJz3d2_GLaIW2aU',
        },
        {
          title: 'IMG 4',
          img:
            'https://i.picsum.photos/id/728/200/300.jpg?hmac=J-q7xv6gzVRQmKunEBaFotw4F0dJ1Q6OnjN85VoBk8o',
        },
      ],
      imgSelected: 0,
    };

    this.gallery = React.createRef(null);
  }

  render() {
    const {imgs, imgSelected} = this.state;
    const {viewName} = this.props;

    return (
      <View style={styles.mainContainer}>
        {/*HEADER */}
        <Header viewName={viewName} elevation={5} />

        {/* CONTENT */}
        <View style={styles.content}>
          {/* TITLE */}
          <ViewTitle title={'Testing the HorizontalView component'} />
          
          {/* GALLERY */}
          <ScrollView
            ref={this.gallery}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.gallery}
            onScroll={(event) => {
              if (event.nativeEvent.contentOffset.x % width === 0) {
                const index = event.nativeEvent.contentOffset.x / width;
                this.setState({imgSelected: index});
              }
            }}>
            {imgs.map((item, index) => (
              <View key={index} style={styles.galleryItem}>
                <Image style={styles.img} source={{uri: item.img}} />
                <Text>{item.title}</Text>
              </View>
            ))}
          </ScrollView>

          {/* IMG SELECTOR */}
          <View style={styles.imgSelectorContainer}>
            {imgs.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={styles.imgSelector}
                onPress={() => {
                  if (this.gallery) {
                    this.gallery.current.scrollTo({
                      x: width * index,
                      y: 0,
                      animated: false,
                    });
                  }
                }}>
                <View
                  style={[
                    styles.imgSelectorcontent,
                    {
                      backgroundColor:
                        imgSelected === index ? Colors.redNcs : Colors.silver,
                    },
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

export default HorizontalGallery;
