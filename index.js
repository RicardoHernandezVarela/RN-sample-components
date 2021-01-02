import {Navigation} from 'react-native-navigation';

/* COMPONENTS IMPORTS */
import Home from './screens/Home';
import ProgressBarView from './screens/ProgressBarView';
import ProgressBarSemiCircleView from './screens/ProgressBarSemiCircleView';
import CustomSwitchView from './screens/CustomSwitchView';

/* COMPONENTS REGISTRY */
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('ProgressBarView', () => ProgressBarView);
Navigation.registerComponent(
  'ProgressBarSemiCircleView',
  () => ProgressBarSemiCircleView,
);

Navigation.registerComponent('CustomSwitchView', () => CustomSwitchView);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: 'dark',
  },
  topBar: {
    visible: false,
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
