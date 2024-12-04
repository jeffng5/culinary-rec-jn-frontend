import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList, ScrollViewBase } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecipeFull from './components/RecipeFull';
import Wine from './components/Wine';
import Health from './components/Health'
import { TagContextProvider } from './hooks/TagContext';
import Toolbar from './components/Toolbar';
import BiographyScreen from './screens/BiographyScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ContactScreen from './screens/ContactScreen';


export default function App() {

  const Stack  = createNativeStackNavigator()
  return (
    <TagContextProvider>
      <NavigationContainer>
    

        <View style ={{flexDirection: 'column'}}> 
          <Stack.Navigator>
          
            <Stack.Screen name = "FavoritesScreen" component = {FavoritesScreen} />
            <Stack.Screen name = 'BiographyScreen' component = {BiographyScreen} />
            <Stack.Screen name = 'ContactScreen' component = {ContactScreen} />
             
           </Stack.Navigator>
           </View>
         
          <View style={styles.container}>
         
          {/* <HeadLogo /> */}
          <Toolbar />  
          <ScrollView>
            <View style={styles.placement}>
              <RecipeFull />
            </View>
            <View style={{ flexDirection: 'row' }}>

              <Wine />


              <Health />
            </View>
          </ScrollView>
          </View>
       
        
      </NavigationContainer>
    </TagContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#496779',
    color: 'white',
    fontWeight: 'bold',
    height: '100%',
    padding: 5

  },
  placement: {
    fontSize: 10,
    flexDirection: 'column',
    fontWeight: 'bold',
  },


});
