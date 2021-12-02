import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Link} from 'react-router-native';
import {Styles} from '../Styles';
import {useParams} from 'react-router';
const data = require('../database/db.json');

const AddTask = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [location, setLocation] = useState('');

    const postData = () => {
        const newId = id.slice(1);
        const form = {
            id: newId,
            title: title,
            priority: 2,
            location: location,
            published: '3.12.2021',
            job: 'Odvoz na vrakovisko',
            photo: 'https://city4people-api.herokuapp.com/taskImg/2.jpg',
            reported: 1,
            details: details,
        };
        data['tasks'].push(form);
    };

    return (
        <>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 2, alignItems: 'center'}}>
                    <View style={{marginTop: 45, width: 320}}>
                        <View
                            style={[
                                Styles.inputBox,
                                {marginBottom: 45, borderColor: '#1faa00'},
                            ]}>
                            <Text style={Styles.label}>Title</Text>
                            <TextInput
                                style={Styles.inputBoxText}
                                maxLength={20}
                                onChangeText={text => setTitle(text)}
                            />
                        </View>

                        <View
                            style={[
                                Styles.inputBox,
                                {marginBottom: 45, borderColor: '#1faa00'},
                            ]}>
                            <Text style={Styles.label}>Location</Text>
                            <TextInput
                                style={Styles.inputBoxText}
                                maxLength={15}
                                onChangeText={text => setLocation(text)}
                            />
                        </View>
                        <View
                            style={[
                                Styles.inputBox,
                                {marginBottom: 45, borderColor: '#1faa00'},
                            ]}>
                            <Text style={Styles.label}>Details</Text>
                            <TextInput
                                style={Styles.inputBoxText}
                                maxLength={100}
                                onChangeText={text => setDetails(text)}
                            />
                        </View>
                    </View>
                </View>

                <View style={{flex: 1}}>
                    <Link style={Styles.button} to={'/Home'} onPress={postData}>
                        <Text style={[Styles.buttonText, {marginBottom: 0}]}>
                            Add Task
                        </Text>
                    </Link>
                </View>
            </View>
        </>
    );
};

export default AddTask;
