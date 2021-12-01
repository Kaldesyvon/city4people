import React from 'react';
import {Image, Text, View} from 'react-native';
import {Link} from "react-router-native";
import {Styles} from "../Styles";
import Icon from "react-native-ionicons";

export default function InfoCard(props){

    return(
        <View style={Styles.taskCard}>
            <Image style={Styles.taskImage} source={{uri: props.src}}/>
            <View style={Styles.textContainer}>
                <Text style={Styles.title}>{props.title}</Text>
                <Link style={Styles.outerbutton} to={"/info/" + props.id} >
                    <View style={Styles.innerButton}>
                        <Text style={Styles.textWhite}>Detail</Text>
                        <Icon
                            name="arrow-forward"
                            size={20}
                            color="white"/></View>
                </Link>
            </View>

        </View>
    )
}