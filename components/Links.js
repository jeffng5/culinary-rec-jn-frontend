import { Text, StyleSheet, Pressable } from 'react-native'
import * as React from 'react'
import { useNavigation } from '@react-navigation/native'

// Generic Link component to receive navigation props and appropriate screen 

function Links({ title, name, screen }) {
    const navigation = useNavigation()

    return (
        <>
            <Pressable onPress={() => navigation.navigate
            ///// receives name prop to be used in screen
            (`${screen}`, name = { name })}>
                <Text style={styles.linkText}>{title}</Text>
            </Pressable>
        </>
    )

}

const styles = StyleSheet.create({

    linkText: {
        color: 'white',
        fontSize: 17,
        marginTop: 10,
        marginRight: 20,

    },

}
)

export default Links