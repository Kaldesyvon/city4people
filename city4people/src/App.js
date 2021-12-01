import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';

import Signin from "./components/Signin";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Info from "./components/Info";
import Profile from "./components/Profile";
import Map from "./components/Map";
import Register from "./components/Register";
import InfoDetail from "./components/InfoDetail";
import Upvotes from './components/Upvotes';

const App = () => {
    return (
        <NativeRouter>
            <Routes>
                <Route path="/signin" element={<Signin/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/navigation" element={<Navigation/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/info" element={<Info/>} />
                <Route path="/info/:id" element={<InfoDetail/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/map" element={<Map/>} />
                <Route path="/map/metals" element={<Map material={'metals'}/>} />
                <Route path="/map/papers" element={<Map material={'papers'}/>} />
                <Route path="/map/tetrapacks" element={<Map material={'tetrapacks'}/>} />
                <Route path="/map/glass" element={<Map material={'glass'}/>} />
                <Route path="/detail" element={<InfoDetail/>} />
                <Route exact path="/" element={<Signin/>} />
                <Route path="/upvotes" element={<Upvotes/>} />
            </Routes>
        </NativeRouter>
    );
};



export default App;
