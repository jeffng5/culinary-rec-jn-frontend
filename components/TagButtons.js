import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState, useContext } from 'react';
import  TagContext  from '../hooks/TagContext'


function TagButtons({children, onPress}) {
   
    const {tags, setTags } = useContext(TagContext)
    const [isPressed, setIsPressed] = useState(false)
    const [tagValues, setTagValues] = useState([])


    function pressHandler(e) {
        
        let ans = JSON.stringify(children)
        onPress && onPress()
        if (isPressed == false) {
            onPress()
            setIsPressed(true)
            e.preventDefault();
            setTagValues(children)
            console.log('tagValues: ', tagValues)
            console.log('HERE:', ans)
            console.log('button pressed')
            setTags([...tags, ans])
            return tagValues
        }
     
        if (isPressed == true) {
            
            setTags(tags.filter(tag => tag !== ans))
            setIsPressed(false)
            e.preventDefault();
            setTagValues(tagValues.filter(value => value !== { children }))
            console.log('button is unselected')
            console.log({ tagValues })
        }
    
    };
    // console.log('tagValues: ', tagValues)
    if (isPressed == false) {
        return (
            <View>
                <Pressable style={styles.buttons} onPress={pressHandler}>
                    <View style={styles.buttons}>
                        <Text style={styles.buttonText}>
                            {children}
                        </Text>
                    </View>
                </Pressable>

            </View>
        )
    }

    
    if (isPressed == true) {

        return (
            
            <Pressable style={styles.buttonClick} onPress={pressHandler}>
                <View style={styles.buttons}>
                    <Text style={styles.buttonText}>
                        {children}
                    </Text>
                </View>
            </Pressable>

        )
    };


};

const styles = StyleSheet.create({
    buttons: {
        padding: 1,
        borderRadius: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ffa500',
    },
    buttonText: {
        color: 'white',
    },

    buttonClick: {
        padding: 1,
        borderRadius: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
        // opacity: '75',
    }, 


}
);
;


export default TagButtons;