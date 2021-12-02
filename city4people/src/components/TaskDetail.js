import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import getAxios from '../api/getAxios';
import {Link} from 'react-router-native';
import Icon from 'react-native-ionicons';
import {Styles} from '../Styles';
import {useParams} from 'react-router';
import data from '../database/db.json';

const TaskDetail = () => {
    const {id} = useParams();

    const [task, setTask] = useState();

    const fetchTask = async () => {
        const newId = id.slice(1);
        if (parseInt(newId) < 2) {
            const response = await getAxios().get(`task/${newId}`);
            setTask(response.data);
        } else {
            let newData = data.tasks[parseInt(newId) - 2];
            setTask(newData);
        }
    };

    useEffect(() => {
        fetchTask();
    }, []);

    if (!task) {
        return null;
    }

    return (
        <>
            <ScrollView
                alignItems="center"
                justifyContent="center"
                style={{
                    marginBottom: 75,
                    display: 'flex',
                }}>
                <View
                    elevation={5}
                    style={[Styles.detailCointainer, {alignSelf: 'center'}]}>
                    <Text style={{marginLeft: 16, marginTop: 16, fontSize: 12}}>
                        Published {task.published}
                    </Text>
                    <Text
                        style={{
                            marginLeft: 16,
                            marginRight: 16,
                            fontSize: 24,
                            color: 'black',
                            fontWeight: '700',
                            marginTop: 8,
                            marginBottom: 16,
                            flexWrap: 'wrap',
                        }}>
                        {task.title}
                    </Text>
                    <Image
                        resizeMode="cover"
                        style={Styles.image1}
                        source={{
                            uri: task.photo,
                        }}
                    />
                    <Text
                        style={{
                            marginTop: 16,
                            marginLeft: 16,
                            color: 'black',
                            fontSize: 16,
                        }}>
                        Priority: {'!'.repeat(task.priority)}
                    </Text>
                    <Text
                        style={{
                            marginTop: 8,
                            marginLeft: 16,
                            color: 'black',
                            fontSize: 16,
                        }}>
                        Job: {task.job}
                    </Text>
                    <Text
                        style={{
                            marginTop: 8,
                            marginLeft: 16,
                            color: 'black',
                            fontSize: 16,
                        }}>
                        Reported: {task.reported}x
                    </Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 8,
                        }}>
                        <Icon
                            name="pin"
                            color="black"
                            style={{marginLeft: 16}}
                        />
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 16,
                                paddingLeft: 8,
                            }}>
                            {task.location}
                        </Text>
                    </View>
                    <Text
                        style={{
                            marginTop: 8,
                            marginLeft: 16,
                            color: 'black',
                            fontSize: 16,
                        }}>
                        Details:
                    </Text>
                    <View>
                        <Text style={{marginLeft: 16, marginRight: 16}}>
                            {task.details}
                        </Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            justifyContent: 'center',
                            marginBottom: 16,
                        }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={Styles.outerbutton}>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: 'white',
                                    }}>
                                    Participate
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <Link
                            to={'/home'}
                            activeOpacity={1}
                            style={[Styles.outerbutton, Styles.marginButton]}>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: 'white',
                                    }}>
                                    Back
                                </Text>
                            </View>
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default TaskDetail;
