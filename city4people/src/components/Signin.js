import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import {Link} from 'react-router-native';
import {Styles} from "../Styles";

const Signin = () => {
    return (
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
            <View style={{flex: 2}}>
                <Image
                    style={Styles.logo}
                    source={require('../assets/images/logo.png')}
                />
            </View>
            <View style={{flex: 2}}>
                <Link style={Styles.button} to={'/Login'}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Login</Text>
                </Link>

                <TouchableOpacity style={Styles.button}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// const styles = StyleSheet.create({
//     text: {
//         color: 'black',
//     },
//     logo: {
//         marginTop: 100,
//         alignSelf: 'center',
//         width: 180,
//         height: 180,
//     },
//     button: {
//         alignItems: 'center',
//         width: 250,
//         height: 55,
//         alignSelf: 'center',
//         marginTop: 40,
//         paddingTop: 12,
//         backgroundColor: '#1faa00',
//         borderRadius: 50,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
// });

export default Signin;
