import { StatusBar } from 'expo-status-bar';
import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from'@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import { Linking } from 'react-native'
import RecipeFull from './components/RecipeFull';
import Toolbar from './components/Toolbar';



const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
   

<>
 <Toolbar/>

<RecipeFull /> 

</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#456178',
    color: 'white',
    fontWeight: 'bold'
  },

  dummyText: {
    marginTop: 40,
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    flex: 1,
    paddingRight: 0
  }


});
