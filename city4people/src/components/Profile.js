import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import React from "react";


export default function Profile(){
    return (



        <View style={styles.container}>

            <View>
                <Image source={require('../assets/images/man-modified.png')} style={styles.profile_image}/>
            </View>


            <View
                style={styles.button_container_white}>
                <Text style={styles.Button_box_white}>Janko Hrasko</Text>
                <Text style={styles.rep_box}>Reputation: 2</Text>
            </View>

            <TouchableOpacity
                style={styles.button_container_green}>
                <Text style={styles.Button_box_green}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button_container_green}>
                <Text style={styles.Button_box_green}>Language</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button_container_green}>
                <Text style={styles.Button_box_green}>About</Text>
            </TouchableOpacity>


        </View>
    )
}


const styles = StyleSheet.create({

    button_container_white: {
        margin: 20,
        borderColor: 'black',
        borderWidth: 2,
        width: 150,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',


    },

    button_container_green: {
        margin: 20,
        borderColor: '#00DB16',
        borderWidth: 5,
        width: 220,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#EEEEEE',


    },

    Button_box_white: {
        color: 'black',
        textAlign: 'center',
        margin: 2,
        fontWeight: 'bold',

    },

    rep_box: {
        color: 'black',
        textAlign: 'center',
    },

    Button_box_green: {
        color: 'black',
        textAlign: 'center',
        margin: 5,
        fontWeight: 'bold',
        fontSize: 20

    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },

    profile_image: {
        height: 150,
        width: 150,
        alignItems: 'center',
    },
});
