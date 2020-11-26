import React from 'react';
import {View, Text} from 'react-native';

class ProgressBarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {viewName} = this.props;

    return (
      <View>
        <Text>{viewName}</Text>
      </View>
    );
  }
}

export default ProgressBarView;
