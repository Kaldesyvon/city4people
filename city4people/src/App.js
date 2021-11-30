import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-ionicons';
import Home from './components/Home';

const Tab = createBottomTabNavigator();

const Map = () => {
    return <View></View>;
};

const Profile = () => {
    return (
        <View>
            <Text style={styles.text}>Profile</Text>
        </View>
    );
};

const Info = () => {
    return (
        <View>
            <Text style={styles.text}>Info</Text>
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
                        headerTitle: 'Tasks',
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
                            <Icon
                                name="information-circle"
                                color={color}
                                size={size}
                            />
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
});

export default App;
