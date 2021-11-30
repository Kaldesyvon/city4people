import {Image, Text, View} from "react-native";
import React from "react";
import {Link} from "react-router-native";
import {Styles} from "../Styles";

export default function Signin () {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>

            <View style={{flex: 2}}>
                <Image
                    style={Styles.logo}
                    source={require('../assets/images/logo.png')}
                />
            </View>

            <View style={{flex: 2}}>

                <Link style={Styles.button} to={'/login'}>
                    <Text style={Styles.buttonText}>Login</Text>
                </Link>

                <Link style={Styles.button} to={'/register'}>
                    <Text style={Styles.buttonText}>Register</Text>
                </Link>

            </View>
        </View>
    );
};
