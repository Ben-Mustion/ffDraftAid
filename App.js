import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainMenu from './src/screens/MainMenu';
import DraftBoard from './src/screens/DraftBoard';
import { Provider } from './src/context/PlayersContext';

const navigator = createStackNavigator(
  {
    Main: MainMenu,
    Draft: DraftBoard
  }, 
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: 'FF Draft Aid'
      }
    }
  );

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
