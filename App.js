import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainMenu from './src/screens/MainMenu';
import DraftBoard from './src/screens/DraftBoard';

const navigator = createStackNavigator({
  Main: MainMenu,
  Draft: DraftBoard
}, {
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    title: 'FF Draft Aid'
  }
});

export default createAppContainer(navigator);
