import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';

export default function Toolbar()  {

    return (
        <>
         <View style={styles.container}>
<View style = {{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}> 
<Image style={styles.imgSize} source={require('../assets/logo.png')} />
<Text style = {styles.dummyText}>Chef Jeff's recipes</Text>
 </View>
 <View style = {{ borderBottomColor: 'white', borderBottomWidth: 1.5, marginTop: 15, marginLeft: 20, marginRight: 40 }}></View>
 <View style={{flexDirection:'row', justifyContent: 'center'}}>
  {/* <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='home' component = {App} />
      <Stack.Screen name= 'biography' component = {biographyScreen} />
    </Stack.Navigator>
  </NavigationContainer> */}

  <Text style={{color: 'white', marginRight: 25}} onPress= {()=> Linking.openURL('/')}>home</Text>

  <Text style={{color: 'white', marginRight: 25}} onPress= {()=> Linking.openURL('/favorites')}>favorites</Text>

  <Text style={{color: 'white', marginRight: 25}} onPress= {()=> Linking.openURL('/biography')}>biography</Text>
  
  <Text style={{color: 'white', marginRight: 25}} onPress= {()=> Linking.openURL('/wine')}>wine</Text>
  
  <Text style={{color: 'white', marginRight: 25}} onPress= {()=> Linking.openURL('/contact')}>contact</Text>
</View>
<View style = {{ borderBottomColor: 'white', borderBottomWidth: 1.5, marginTop: 2, marginLeft: 20, marginRight: 40 }}></View>

</View>
</>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#456178',
      color: 'white',
      fontWeight: 'bold'
    },
    imgSize: {
      marginTop: 30,
      marginLeft: 20,
      height: 50,
      width: 50
    }
    ,

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
}
)

