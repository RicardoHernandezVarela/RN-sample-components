import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

import Header from '../../components/Header';
import ViewTitle from '../../components/ViewTitle';
import DeviceLayout from '../../constants/DeviceLayout';
import Colors from '../../constants/Colors';

class ProgressBarSemiCircleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {viewName} = this.props;

    return (
      <View>
        <Header viewName={viewName} elevation={5} />

        <TouchableWithoutFeedback>
          <View>
            {/* TITLE */}
            <ViewTitle title={'Testing the ProgressBarSemiCircle component'} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default ProgressBarSemiCircleView;
