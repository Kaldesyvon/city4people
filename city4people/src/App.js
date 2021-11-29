import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-ionicons';

const Tab = createBottomTabNavigator();

const Map = () => {
    return (
        <View>
            <Text style={styles.text}>Map</Text>
        </View>
    );
};

const Home = () => {
    return (
        <View>
            <Text style={styles.text}>Hello</Text>
        </View>
    );
};

const Profile = () => {
    return (
        <View>
            <Text style={styles.text}>Profile</Text>
        </View>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    // tabBarLabel: () => {
                        // return null;
                    // },
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
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black',
    },
});

export default App;
