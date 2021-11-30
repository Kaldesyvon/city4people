import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-ionicons';

import Home from "./Home";
import Info from "./Info";
import Profile from "./Profile";
import Map from "./Map";

const Tab = createBottomTabNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{

                    tabBarStyle: {
                        height: '11%',
                        backgroundColor: 'white',
                        position: 'absolute',
                        paddingBottom: 15,
                    },
                    tabBarActiveTintColor: '#00DB16',
                    tabBarInactiveTintColor: 'black',
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Map"
                    component={Map}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Icon name="map" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Icon name="person" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Info"
                    component={Info}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Icon name="information-circle" color={color} size={size}/>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
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

export default Navigation;
