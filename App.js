import { StatusBar } from 'expo-status-bar';
import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from'@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import { Linking } from 'react-native'
import RecipeFull from './components/RecipeFull'



const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <View style={styles.container}>

      <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
    <Image style={styles.imgSize} source={require('./assets/logo.png')} />
    <Text style = {styles.dummyText}>Chef Jeff's recipes</Text>
     </View>
     <View style = {{ borderBottomColor: 'white', borderBottomWidth: 1.5, marginTop: 15, marginLeft: 20, marginRight: 40 }}></View>
    <View flexDirection='row'>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component = {App} />
          <Stack.Screen name= 'biography' component = {biographyScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <Text style={{color: 'white', marginLeft: 30}} onPress= {()=> Linking.openURL('/')}>home</Text>
      <Text style={{color: 'white', marginLeft: 25}} onPress= {()=> Linking.openURL('/favorites')}>favorites</Text>
      <Text style={{color: 'white', marginLeft: 25}} onPress= {()=> Linking.openURL('/biography')}>biography</Text>
      <Text style={{color: 'white', marginLeft: 25}} onPress= {()=> Linking.openURL('/wine')}>wine</Text>
      <Text style={{color: 'white', marginLeft: 25}} onPress= {()=> Linking.openURL('/contact')}>contact</Text>
    </View>
    <View style = {{ borderBottomColor: 'white', borderBottomWidth: 1.5, marginTop: 2, marginLeft: 20, marginRight: 40 }}></View>

<RecipeFull /> 
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
,
  imgSize: {
    marginTop: 30,
    marginLeft: 20,
    height: 50,
    width: 50
  }
,

});
