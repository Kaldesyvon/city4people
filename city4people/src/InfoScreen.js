import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import InfoCard from "./InfoCard";
export default function InfoScreen(){

    return(
        <ScrollView >
                <InfoCard style={styles.card} src={require("./assets/kovy.png")}/>
                <InfoCard style={styles.card} src={require("./assets/papier.png")}/>
                <InfoCard style={styles.card} src={require("./assets/tetrapack.png")}/>
                <InfoCard style={styles.card} src={require("./assets/sklo.png")}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1
    },
    row: {
        flexDirection: "row",
    }
});