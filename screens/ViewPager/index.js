import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import Header from '../../components/Header';
import CustomSwitch from '../../components/CustomSwitch';
import ViewTitle from '../../components/ViewTitle';
import TabsMenu from '../../components/TabsMenu';

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
  title: {
    width: width,
    height: 100,
  },
  viewPagerContainer: {
    width: width,
    height: height - 55 - 100,
  },
  viewPager: {
    width: width,
    height: height - 55 - 100 - 30,
  },
  page: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageText: {
    color: 'white',
  },
  page1: {
    backgroundColor: Colors.redNcs,
  },
  page2: {
    backgroundColor: Colors.eagleGreen,
  },
  page3: {
    backgroundColor: Colors.platinum,
  },
});

class ViewPagerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: 0,
    };

    this.menuOptions = [
      {
        text: 'Page1',
      },
      {
        text: 'Page2',
      },
      {
        text: 'Page3',
      },
    ];

    this.viewPager = React.createRef(null);
  }

  render() {
    const {optionSelected} = this.state;
    const {viewName} = this.props;

    return (
      <View style={styles.mainContainer}>
        {/*HEADER */}
        <Header viewName={viewName} elevation={5} />

        {/* CONTENT */}
        <View style={styles.content}>
          {/* TITLE */}
          <View style={styles.title}>
            <ViewTitle title={'Testing the ViewPager component'} />
          </View>

          <View style={styles.viewPagerContainer}>
            {/* TABS MENU */}
            <TabsMenu
              options={this.menuOptions}
              optionsColor={{true: Colors.cerulean, false: Colors.gray}}
              selected={optionSelected}
              select={(page) => {
                this.setState({optionSelected: page});
                this.viewPager.current.setPage(page);
              }}
            />

            {/* VIEWPAGER */}
            <ViewPager
              ref={this.viewPager}
              style={styles.viewPager}
              initialPage={0}
              onPageSelected={(PageSelectedEvent) => {
                this.setState({
                  optionSelected: PageSelectedEvent.nativeEvent.position,
                });
              }}>
              <View key="1" style={[styles.page, styles.page1]}>
                <Text style={styles.pageText}>{'First page'}</Text>
              </View>
              <View key="2" style={[styles.page, styles.page2]}>
                <Text style={styles.pageText}>{'Second page'}</Text>
              </View>
              <View key="3" style={[styles.page, styles.page3]}>
                <Text style={styles.pageText}>{'Third page'}</Text>
              </View>
            </ViewPager>
          </View>
        </View>
      </View>
    );
  }
}

export default ViewPagerView;
