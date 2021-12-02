import React, {useEffect, useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {Link} from 'react-router-native';
import getAxios from '../api/getAxios';
import Icon from 'react-native-ionicons';
import {Styles} from '../Styles';
import Navigation from './Navigation';
import data from '../database/db.json';

const Home = () => {
    let counter = 0;
    const [taskList, setTaskList] = useState([]);

    const fetchTaskList = async () => {
        const response = await getAxios().get('tasks');
        let newData = response.data;
        data['tasks'].map(task => {
            newData.push(task);
        });
        setTaskList(newData);
    };

    useEffect(() => {
        fetchTaskList();
    }, []);

    return (
        <>
            <ScrollView
                alignItems="center"
                showsVerticalScrollIndicator={false}
                style={{
                    backgroundColor: '#EEEEEE',
                    display: 'flex',
                    flex: 0,
                    marginBottom: 75,
                }}>
                {taskList.map(task => {
                    counter++;
                    return (
                        <View
                            elevation={5}
                            key={task.id}
                            style={Styles.taskCard}>
                            <Image
                                resizeMode="cover"
                                style={Styles.taskImage}
                                source={{
                                    uri: task.photo,
                                }}
                            />

                            <View style={Styles.textContainer}>
                                <Text style={{fontSize: 12}}>
                                    Published {task.published}
                                </Text>
                                <Text style={Styles.title}>{task.title}</Text>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginTop: 8,
                                    }}>
                                    <View
                                        style={{
                                            width: '50%',
                                            justifyContent: 'center',
                                        }}>
                                        <Text
                                            style={{
                                                color: 'black',
                                                fontSize: 16,
                                            }}>
                                            Priority:{' '}
                                            {'!'.repeat(task.priority)}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                        <Icon name="pin" color="black" />
                                        <Text
                                            style={{
                                                color: 'black',
                                                fontSize: 16,
                                                paddingLeft: 8,
                                            }}>
                                            {task.location}
                                        </Text>
                                    </View>
                                </View>
                                <Link
                                    to={`/taskdetail/:${task.id}`}
                                    style={Styles.outerbutton}>
                                    <View style={Styles.innerButton}>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                color: 'white',
                                            }}>
                                            Detail
                                        </Text>
                                        <Icon
                                            name="arrow-forward"
                                            size={20}
                                            color="white"></Icon>
                                    </View>
                                </Link>
                            </View>
                        </View>
                    );
                })}
                <Link
                    activeOpacity={1}
                    style={{
                        borderWidth: 4,
                        backgroundColor: 'red',
                        borderColor: '#1faa00',
                        position: 'absolute',
                        width: 70,
                        height: 70,
                        bottom: 110,
                        right: 30,
                        zIndex: 10,
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Icon name="add" style={{color: '#1faa00'}} size={50} />
                </Link>
            </ScrollView>
            <Link
                to={`/addtask/:${counter}`}
                activeOpacity={1}
                style={{
                    borderWidth: 4,
                    backgroundColor: 'white',
                    borderColor: '#1faa00',
                    position: 'absolute',
                    width: 70,
                    height: 70,
                    bottom: 110,
                    right: 30,
                    zIndex: 10,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Icon name="add" style={{color: '#1faa00'}} size={50} />
            </Link>
            <Navigation activeTab={'home'}></Navigation>
        </>
    );
};

export default Home;
