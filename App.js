import { StatusBar } from 'expo-status-bar';
import Router from './src/router';
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

