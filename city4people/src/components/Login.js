import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Link} from 'react-router-native';

const Login = () => {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1}}>
                <Text>Login</Text>
            </View>
            <View style={{flex: 2}}>
                <Text>WIP</Text>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button}>
                    {/*<Text*/}
                    {/*    style={{*/}
                    {/*        color: 'white',*/}
                    {/*        fontSize: 20,*/}
                    {/*        fontWeight: 'bold',*/}
                    {/*    }}>*/}
                    {/*    Login*/}
                    {/*</Text>*/}
                    <Link to={"/Navigation"}>
                        <Text> awdawd</Text>
                    </Link>
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
export default Login;
