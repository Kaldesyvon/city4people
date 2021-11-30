import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeRouter, Route, Link, Routes} from 'react-router-native';

import Signin from "./components/Signin";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Info from "./components/Info";
import Profile from "./components/Profile";
import Map from "./components/Map";

const App = () => {
    return (
        <NativeRouter>
            <Routes>
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Navigation" element={<Navigation />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Info" element={<Info />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Map" element={<Map />} />
                <Route exact path="/" element={<Signin />} />
                {/*<Route path="/profile" element={<Info/>} />*/}
            </Routes>
        </NativeRouter>
    );
};



export default App;
