import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react'
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BiographyScreen from './screens/BiographyScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ContactScreen from './screens/ContactScreen';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';



const Stack = createNativeStackNavigator()

export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'gray',
      primary: 'white'
    }
  }

  return (

    <NavigationContainer theme ={DarkTheme}>

      {/* <View style={{ flexDirection: 'column' }}> */}
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name = 'Home' component= {HomeScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name='Biography' component={BiographyScreen} />
          <Stack.Screen name='Contact' component={ContactScreen} />


        </Stack.Navigator>
      {/* </View> */}

      {/* <HomeScreen /> */}

    </NavigationContainer>
  )
}
;
