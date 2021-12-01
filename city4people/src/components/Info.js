import React from 'react';
import {ScrollView, View} from 'react-native';
import InfoCard from "./InfoCard";
import Navigation from './Navigation';

export default function Info(props){
    return(
        <ScrollView>
            <InfoCard style={{flex: 1}} src={require("../assets/kovy.png")}/>
            <InfoCard style={{flex: 1}} src={require("../assets/papier.png")} navigation={props.navigation} material={'papers'}/>
            <InfoCard style={{flex: 1}} src={require("../assets/tetrapack.png")} navigation={props.navigation} material={'tetrapacks'}/>
            <InfoCard style={{flex: 1}} src={require("../assets/sklo.png")} navigation={props.navigation} material={'glasses'}/>
            <View style={{flex: 2}}>
                <Navigation  activeTab={'info'}></Navigation>

            </View>
        </ScrollView>
    )
}