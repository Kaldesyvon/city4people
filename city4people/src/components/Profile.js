import {Text, View, TouchableOpacity, Image} from "react-native";
import React from "react";
import {Styles} from "../Styles";
import Navigation from "./Navigation";

export default function Profile(){
    return (

        <View style={Styles.container}>

            <View style = {Styles.imageCircle}>
                <Image source={require('../assets/images/man-modified.png')} style={Styles.profile_image}/>
            </View>

            <View
                style={Styles.button_container_white}>
                <Text style={Styles.Button_box_white}>Janko Hrasko</Text>
                <Text style={Styles.rep_box}>Reputation: 2</Text>
            </View>

            <TouchableOpacity
                style={Styles.button_container_green}>
                <Text style={Styles.Button_box_green}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.button_container_green}>
                <Text style={Styles.Button_box_green}>Language</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.button_container_green}>
                <Text style={Styles.Button_box_green}>About</Text>
            </TouchableOpacity>

            <Navigation activeTab='profile'>
            </Navigation>
        </View>
    )
}
