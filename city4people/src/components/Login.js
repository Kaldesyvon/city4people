import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Link} from 'react-router-native';
import {Styles} from "../Styles";

export default function Login () {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1}}>
                <Text>Login</Text>
            </View>
            <View style={{flex: 2}}>
                <Text>WIP</Text>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity style={Styles.button}>
                    <Link to={"/navigation"}>
                        <Text style={Styles.buttonText}> Login</Text>
                    </Link>
                </TouchableOpacity>
            </View>
        </View>
    );
};
