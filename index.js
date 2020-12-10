import {Navigation} from 'react-native-navigation';

/* COMPONENTS IMPORTS */
import Home from './screens/Home';
import ProgressBarView from './screens/ProgressBarView';
import ProgressBarSemiCircleView from './screens/ProgressBarSemiCircleView';

/* COMPONENTS REGISTRY */
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('ProgressBarView', () => ProgressBarView);
Navigation.registerComponent(
  'ProgressBarSemiCircleView',
  () => ProgressBarSemiCircleView,
);

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
