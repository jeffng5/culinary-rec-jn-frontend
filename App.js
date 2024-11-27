import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecipeFull from './components/RecipeFull';
import Toolbar from './components/Toolbar';
import RecipeTag from './components/RecipeTag';

import { TagContextProvider } from './hooks/TagContext';





const Stack = createNativeStackNavigator();
export default function App() {

  return (

    <View style={styles.container}>
      <View>
        <Toolbar />
      </View>

      <View style= {{flex:1, flexDirection: 'column', justifyContent: 'flex-start'}}>
        <ScrollView style={styles.placement}>
          <TagContextProvider>
          <RecipeFull />
          </TagContextProvider>
        </ScrollView>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // paddingTop: 10,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    height: '100%',
    justifyContent: 'stretch'
  },
  placement: {
    fontSize: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingTop: 10,
    fontWeight: 'bold'
  },


});
