import {Navigation} from 'react-native-navigation';

/* COMPONENTS IMPORTS */
import Home from './screens/Home';
import ProgressBarView from './screens/ProgressBarView';
import ProgressBarSemiCircleView from './screens/ProgressBarSemiCircleView';
import CustomSwitchView from './screens/CustomSwitchView';
import ViewPager from './screens/ViewPager';
import HorizontalGalleryView from './screens/HorizontalGalleryView';
import IconView from './screens/IconView';
import ListWithItemMenuView from './screens/ListWithItemMenuView';

/* COMPONENTS REGISTRY */
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('ProgressBarView', () => ProgressBarView);
Navigation.registerComponent(
  'ProgressBarSemiCircleView',
  () => ProgressBarSemiCircleView,
);

Navigation.registerComponent('CustomSwitchView', () => CustomSwitchView);

Navigation.registerComponent('ViewPagerView', () => ViewPager);

Navigation.registerComponent(
  'HorizontalGalleryView',
  () => HorizontalGalleryView,
);

Navigation.registerComponent('IconView', () => IconView);

Navigation.registerComponent(
  'ListWithItemMenuView',
  () => ListWithItemMenuView,
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
