import React, {useEffect, useState} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import getAxios from '../api/getAxios';
import Icon from 'react-native-ionicons';
import {Styles} from '../Styles';

const Home = () => {
    const [taskList, setTaskList] = useState([]);

    const fetchTaskList = async () => {
        const response = await getAxios().get('tasks');

        setTaskList(response.data);
    };

    useEffect(() => {
        fetchTaskList();
    }, []);

    return (
        <>
            <TouchableOpacity
                style={{
                    borderWidth: 4,
                    backgroundColor: 'white',
                    borderColor: '#1faa00',
                    position: 'absolute',
                    width: 70,
                    height: 70,
                    bottom: 110,
                    right: 30,
                    zIndex: 5,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Icon name="add" style={{color: '#1faa00'}} size={50} />
            </TouchableOpacity>
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
                    return (
                        <View key={task.id} style={Styles.taskCard}>
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
                                <TouchableOpacity style={Styles.outerbutton}>
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
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </>
    );
};

export default Home;
