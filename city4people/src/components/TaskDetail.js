import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import getAxios from '../api/getAxios';
import Icon from 'react-native-ionicons';
import {Styles} from '../Styles';
import {black} from 'react-native-paper/lib/typescript/styles/colors';

const TaskDetail = ({route}) => {
    const id = route.params.id;

    const [task, setTask] = useState();

    const fetchTask = async () => {
        const response = await getAxios().get(`task/${id}`);

        setTask(response.data);
    };

    useEffect(() => {
        fetchTask();
    }, []);

    if (!task) {
        return null;
    }

    return (
        <ScrollView
            alignItems="center"
            style={{marginBottom: 75, display: 'flex'}}>
            <View elevation={5} style={Styles.detailCointainer}>
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
                    <Icon name="pin" color="black" style={{marginLeft: 16}} />
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
                                Report
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[Styles.outerbutton, Styles.marginButton]}>
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
                </View>
            </View>
        </ScrollView>
    );
};

export default TaskDetail;
