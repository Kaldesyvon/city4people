import {Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import React from "react";
import {Link} from "react-router-native";

const Signin = () => {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 2}}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/logo.png')}
                />
            </View>
            <View style={{flex: 2}}>
                {/*<TouchableOpacity style={styles.button}>*/}
                {/*    /!*<Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Login</Text>*!/*/}
                {/*    <Link to={"/Login"}>*/}
                {/*        <Text> awdawd</Text>*/}
                {/*    </Link>*/}
                {/*</TouchableOpacity>*/}
                <Link style={styles.button} to={'/Login'}>
                    <Text>LOGIN</Text>
                </Link>

                <TouchableOpacity style={styles.button}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black',
    },
    mapContainer: {
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    logo: {
        marginTop: 100,
        // paddingTop: 150,
        alignSelf: 'center',
        width: 170,
        height: 170,
    },
    button: {
        alignItems: 'center',
        width: 250,
        height: 55,
        alignSelf: 'center',
        marginTop: 35,
        // padding: 15,
        paddingTop: 12,
        backgroundColor: '#1faa00',
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Signin;
