import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from "react-native-ionicons";

export default function InfoCard(props){

    return(
        <View style={styles.card}>
            <Image style={styles.img} source={props.src}/>
            <Text style={{margin: 10}}>Zistite ako správne recyklovať odpad takéhoto typu. Nájdite miesta vo svojom okolí kam môžte takýto druh odpadu vyhodiť.</Text>
            <View style={styles.row}>
                <TouchableHighlight style={styles.buton}>
                    <Text style={styles.text}>Find on map</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buton}>
                    <Text style={styles.text}>Detail</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: "5%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 25,
        marginBottom: "20%"
    },
    row: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        marginVertical: "5%"
    },
    buton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "lightgray",
        borderEndWidth: 0,
        backgroundColor: "#1FAA00",
        borderRadius: 25,
        height: 45,
        marginHorizontal: 20
    },
    text: {
        color: "white"
    },
    img: {
        position: "relative",
        borderRadius: 25,
        width: "100%",
        marginBottom: "5%"}
});