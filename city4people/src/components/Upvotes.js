import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from "../Styles";
import getAxios from '../api/getAxios';
import Navigation from "./Navigation";
import Icon from 'react-native-ionicons';
import { Link } from "react-router-native";
import SelectDropdown from 'react-native-select-dropdown'

const Upvotes = () => {

    const [taskList, setTaskList] = useState([]);
    
    const fetchTaskList = async () => {
        const response = await getAxios().get('upvotes');
    
        setTaskList(response.data);
    };
    
    useEffect(() => {
        fetchTaskList();
    }, []);


    return (

        <View style = {Styles.bottomNav}>
            <View
                style = {Styles.topBox}>
                <Text
                    style = {Styles.topText}>
                    Upvotes</Text>
            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    marginBottom: 75,
                }}>
                {taskList.map(upvotes => {
                    return(
                        <View key={upvotes.id} style={[Styles.Upvotecard, upvotes.priority == 3 ? Styles.elevationRed : Styles.elevationGreen]}>
                            <Text
                                style = {Styles.heading}>
                                {upvotes.title}
                            </Text>
                            <Text
                                style = {Styles.subHeading}>
                                Upvoted {upvotes.published}
                            </Text>
                            <View style = {Styles.upvoteLocation}>
                                <Icon name="pin" color="black" />
                                <Text>{upvotes.location}</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
            <Navigation
                activeTab='profile'>
            </Navigation>
        </View>
    );

    // return(
    //     <View style={[Styles.card, Styles.elevation]}>
    //         <View>
    //         <Text style={Styles.heading}>
    //             React Native Box Shadow (Elevation)
    //         </Text>
    //         </View>
    //         <Text>
    //         Using the elevation style prop to apply box-shadow for Android devices
    //         </Text>
    //     </View>
    // )
};

export default Upvotes