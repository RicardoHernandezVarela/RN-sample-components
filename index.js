import {Navigation} from 'react-native-navigation';
import Home from './screens/Home';

Navigation.registerComponent('Home', () => Home);

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
