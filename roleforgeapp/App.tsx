import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Telas/Login';
import Cadastro from './src/Telas/Cadastro';
import Menu from './src/components/Menu';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Login: undefined,
  Cadastro: undefined,
  Home: undefined,
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;