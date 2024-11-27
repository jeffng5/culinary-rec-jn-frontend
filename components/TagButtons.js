import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState, useContext } from 'react';
import { TagContext } from '../hooks/TagContext'

function TagButtons({children}) {

    const [isPressed, setIsPressed] = useState(false)
    const [tagValues, setTagValues] = useState([])

    function pressHandler(e) {

        if (isPressed == false) {
           
            setIsPressed(true)
            e.preventDefault();
            console.log(children)
            setTagValues(children)
            console.log(tagValues)
            let ans = JSON.stringify(children)
            console.log(ans)
        
            console.log('button pressed')
       
            return tagValues
                    
        }

        if (isPressed == true) {
            setIsPressed(false)
            e.preventDefault();
            setTagValues([tagValues.filter(value => value !== { children })])
            console.log('button is unselected')
            console.log({ tagValues })
        }
    
    };
    

    if (isPressed == false) {
        return (
            <>
                <Pressable style={styles.buttons} onPress={pressHandler}>
                    <View style={styles.buttons}>
                        <Text style={styles.buttonText}>
                            {children}
                        </Text>
                    </View>
                </Pressable>

            </>
        )
    }
    if (isPressed == true) {

        return (
            <>
            <Pressable style={styles.buttonClick} onPress={pressHandler}>
                <View style={styles.buttons}>
                    <Text style={styles.buttonText}>
                        {children}
                    </Text>
                </View>
            </Pressable>
          
            </>
        )
    };


};

const styles = StyleSheet.create({
    buttons: {
        padding: 4,
        borderRadius: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ffa500',
    },
    buttonText: {
        color: 'white',
    },

    buttonClick: {
        padding: 4,
        borderRadius: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
        opacity: '75',
    }


}
);
;


export default TagButtons;