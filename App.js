
import Router from './src/router';
import {NavigationContainer} from '@react-navigation/native'
import {TotalContextProvider} from './src/context/index'

export default function App() {
  return (
    <TotalContextProvider>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    </TotalContextProvider>
  );
}

