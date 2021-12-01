import React, { useState } from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {Link} from "react-router-native";
import {Styles} from "../Styles";

export default function InfoCard(props){

    const handlePressDetail = material => {
        props.navigation.navigate('Map', {
            material,
        });
    };

    return(
        <View style={Styles.card}>
            <Image style={Styles.img} source={props.src}/>
            <Text style={{margin: 10}}>Zistite ako správne recyklovať odpad takéhoto typu. Nájdite miesta vo svojom okolí kam môžte takýto druh odpadu vyhodiť.</Text>
            <View style={Styles.row}>
                <Link style={Styles.buton} to={"/map/papers"} >
                        <Text style={Styles.textWhite}>Find on map</Text>
                </Link>
                <Link style={Styles.buton} to={"/detail"} >
                    <Text style={Styles.textWhite}>Detail</Text>
                </Link>
            </View>
        </View>
    )
}