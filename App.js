import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList, ScrollViewBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecipeFull from './components/RecipeFull';
import Toolbar from './components/Toolbar';
import Wine from './components/Wine';
import Health from './components/Health'

import { TagContextProvider } from './hooks/TagContext';





const Stack = createNativeStackNavigator();
export default function App() {

  return (

    <View style={styles.container}>

        <Toolbar />
      <ScrollView>
        <View style={styles.placement}>
          <RecipeFull />
        </View>
    <View style= {{flexDirection: 'row'}}>
    
      <Wine/>

   
      <Health/>
      </View>
      </ScrollView>
    </View>
 

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // marginTop: -100,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    height: '100%',

  },
  placement: {
    fontSize: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingTop: 0,
    fontWeight: 'bold'
  },


});
