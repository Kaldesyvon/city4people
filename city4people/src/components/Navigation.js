import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-ionicons';
import Home from "./Home";
import Info from "./Info";
import Profile from "./Profile";
import Map from "./Map";

const Tab = createBottomTabNavigator();

export default function Navigation () {
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
