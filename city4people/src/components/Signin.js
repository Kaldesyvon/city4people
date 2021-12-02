import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Link} from 'react-router-native';
import {Styles} from '../Styles';

const Signin = () => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
            }}>
            <View style={{flex: 2}}>
                <Image
                    style={Styles.logo}
                    source={require('../assets/images/logo.png')}
                />
            </View>
            <View style={{flex: 2}}>
                <Link style={Styles.button} to={'/Login'}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                        Login
                    </Text>
                </Link>

                <TouchableOpacity style={Styles.button}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Signin;
