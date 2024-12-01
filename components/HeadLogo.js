import { View, Text, StyleSheet, Image} from 'react-native'


const HeadLogo = () => {

return (

<View style={styles.container}>
<View style = {{flexDirection: 'row'}}> 
<Image style={styles.imgSize} source={require('../assets/FullLogo.png')} />
<Text style = {styles.headerText}>Chef Jeff's recipes</Text>
 </View>

    </View>

)
};
export default HeadLogo;

const styles = StyleSheet.create({
    container: {
    marginTop: 20,
      alignItems: 'center',
      backgroundColor: 'white',
      color: 'black',
      fontWeight: 'bold'
    },
    imgSize: {
      marginLeft: 20,
      height: 100,
      width: 100,
      borderRadius: 20,
      paddingRight: -40
    }
    ,

  headerText: {
    marginTop: 40,
    marginLeft: -15,
    color: 'black',
    fontSize: 25,
    textAlign: 'left',
    paddingRight: 0
  }

}  );

