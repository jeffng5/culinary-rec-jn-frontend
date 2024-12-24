import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react'
import HomeScreen from './screens/HomeScreen';
import { TagContextProvider } from './hooks/TagContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BiographyScreen from './screens/BiographyScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ContactScreen from './screens/ContactScreen';
import DetailsScreen from './screens/DetailsScreen';
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
    <TagContextProvider>
  
    <NavigationContainer theme ={DarkTheme}>

      {/* <View style={{ flexDirection: 'column' }}> */}
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name = 'Home' component= {HomeScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name='Biography' component={BiographyScreen} />
          <Stack.Screen name='Contact' component={ContactScreen} />
          <Stack.Screen name = 'Details' component = {DetailsScreen} />


        </Stack.Navigator>
      {/* </View> */}

      {/* <HomeScreen /> */}

    </NavigationContainer>
   
    </TagContextProvider>
  )
}
;
