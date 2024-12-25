import { View } from 'react-native';
import HeadLogo from './HeadLogo'
import { useNavigation } from '@react-navigation/native'
import BiographyScreen from '../screens/BiographyScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ContactScreen from '../screens/ContactScreen';
import Links from './Links'

// Toolbar component that serves the 3 links in HomeScreen to bio, favorites, and contact

export default function Toolbar() {

    const navigation = useNavigation()

    return (
        <>
            <HeadLogo />

            <View style={{ borderTopColor: 'white', borderTopWidth: 1.5, marginTop: 10 }}>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 40, marginRight: 40, justifyContent: 'center' }}>

                <Links title='favorites' screen='Favorites' name = 'Favorites'/>
                <Links title='biography' screen='Biography' name = 'Biography' />
                <Links title='contact' screen = 'Contact' name = 'Contact' />

            </View>

            <View style={{ borderBottomColor: 'white', borderBottomWidth: 1.5, marginBottom: 30, marginTop: 10 }}></View>
        </>
    )
};



