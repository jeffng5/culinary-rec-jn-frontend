import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecipeFull from './components/RecipeFull';
import Toolbar from './components/Toolbar';



const Stack = createNativeStackNavigator();
export default function App() {

  return (


    <View style={styles.container}>
      <View>
        <Toolbar />
      </View>

      <ScrollView style={styles.placement}>
        <RecipeFull />
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    backgroundColor: '#456178',
    color: 'white',
    fontWeight: 'bold',
    height: '100%',
    justifyContent: 'stretch'
  },
  placement: {
    fontSize: 10,
    backgroundColor: '#456178', 
    flexDirection: 'column', 
    paddingTop: 25,
    fontWeight: 'bold'
  }


});
