import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';

import Signin from './components/Signin';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Info from './components/Info';
import Profile from './components/Profile';
import Map from './components/Map';
import Register from './components/Register';
import Detail from './components/Detail';
import TaskDetail from './components/TaskDetail';
import ActivityDetail from './components/ActivityDetail';
import AddTask from './components/AddTask';
import Activity from './components/Activity';

const App = () => {
    return (
        <NativeRouter>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/navigation" element={<Navigation />} />
                <Route path="/home" element={<Home />} />
                <Route path="/taskdetail/:id" element={<TaskDetail />} />
                <Route
                    path="/activitydetail/:id"
                    element={<ActivityDetail />}
                />
                <Route path="/addtask" element={<AddTask />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/info" element={<Info />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/map" element={<Map />} />
                <Route path="/detail" element={<Detail />} />
                <Route exact path="/" element={<Signin />} />
            </Routes>
        </NativeRouter>
    );
};

export default App;
