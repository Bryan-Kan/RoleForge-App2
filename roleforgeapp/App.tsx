import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack';
import { UserProvider } from './src/components/usuario';

import Login from './src/Telas/Login';
import Cadastro from './src/Telas/Cadastro';
import Menu from './src/components/Menu';
import CriaCampanha from './src/Telas/CriarCampanha';
import SuasCampanhas from './src/Telas/SuasCampanhas';
import AcheCampanha from './src/Telas/AcheCampanha';
import PartCampanha from './src/Telas/PartCampanha';
import EditarFicha from './src/Telas/EditarFicha';
import CampanhaMestre from './src/Telas/CampanhaMestre';
import CriaPersonagem from './src/Telas/CriaPersonagem';
import CampanhaJogador from './src/Telas/CampanhaJogador';
import ListaPersonagem from './src/Telas/ListaPersonagem';
import AbrirFicha from './src/Telas/AbrirFicha';
import EditarPersonagem from './src/Telas/EditarPersonagem';
import MudarNome from './src/Telas/MudarNome';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Login: undefined,
  Cadastro: undefined,
  Home: undefined,
  CriaCampanha: undefined,
  AcheCampanha: undefined,
  PartCampanha: undefined,
  EditarFicha: undefined,
  CampanhaMestre: undefined,
  CriaPersonagem: undefined,
  CampanhaJogador: undefined,
  ListaPersonagem: undefined,
  AbrirFicha: undefined,
  EditarPersonagem: undefined,
  MudarNome: undefined,
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const App = () => {

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
        >

          <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>

          <Stack.Screen name="Cadastro" component={Cadastro}  options={{ headerShown: false }}/>

          <Stack.Screen name="Menu" component={Menu}  options={{ headerShown: false }}/>

          <Stack.Screen name="Criar Campanha" component={CriaCampanha}/>

          <Stack.Screen name="Suas Campanhas" component={SuasCampanhas}/>

          <Stack.Screen name='Ache uma Campanha' component={AcheCampanha}/>

          <Stack.Screen name='Campanhas que Participa' component={PartCampanha}/>

          <Stack.Screen name='Editar Ficha' component={EditarFicha}/>

          <Stack.Screen name='Campanha Mestre' component={CampanhaMestre}/>

          <Stack.Screen name='Criar Personagem' component={CriaPersonagem}/>

          <Stack.Screen name='Campanha Jogador' component={CampanhaJogador}/>

          <Stack.Screen name='Lista de Personagem' component={ListaPersonagem}/>

          <Stack.Screen name='Ficha do Personagem' component={AbrirFicha}/>

          <Stack.Screen name='Editar o Personagem' component={EditarPersonagem}/>

          <Stack.Screen name='Mudar o Nome' component={MudarNome}/>

        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;