import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import InfoCard from "./InfoCard";

export default function Info(){

    return(
        <ScrollView >
            <InfoCard style={{flex: 1}} src={require("../assets/kovy.png")}/>
            <InfoCard style={{flex: 1}} src={require("../assets/papier.png")}/>
            <InfoCard style={{flex: 1}} src={require("../assets/tetrapack.png")}/>
            <InfoCard style={{flex: 1}} src={require("../assets/sklo.png")}/>
        </ScrollView>
    )
}