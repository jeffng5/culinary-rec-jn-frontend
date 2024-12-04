import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList, Pressable } from 'react-native';
import HeadLogo from './HeadLogo'
import { useNavigation, useRoute, createNativeStackNavigator, useLinkProps } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import BiographyScreen from '../screens/BiographyScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ContactScreen from '../screens/ContactScreen';
import Links from './Links'



export default function Toolbar() {

    const navigation = useNavigation()

    return (
        <>
            <HeadLogo />

            <View style={{ borderTopColor: 'white', borderTopWidth: 1.5, marginTop: 10 }}>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 45, marginRight: 45, justifyContent: 'center' }}>

                <Links title='favorites' onPress={() => navigation.navigate(FavoritesScreen)} />
                <Links title='biography' onPress={() =>
                    navigation.navigate(BiographyScreen)} />
                <Links title='contact' onPress={() => navigation.navigate(ContactScreen)} />

            </View>

            <View style={{ borderBottomColor: 'white', borderBottomWidth: 1.5, marginBottom: 30, marginTop: 10 }}></View>
        </>
    )
};



