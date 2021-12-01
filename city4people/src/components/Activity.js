import React, {useEffect, useState} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';
import getAxios from '../api/getAxios';
import Icon from 'react-native-ionicons';
import {Styles} from '../Styles';
import Navigation from './Navigation';

const Activity = () => {
    const [activityList, setActivityList] = useState([]);

    const fetchActivityList = async () => {
        const response = await getAxios().get('activities');

        setActivityList(response.data);
    };

    useEffect(() => {
        fetchActivityList();
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
                    marginBottom: 74,
                }}>
                {activityList.map(activity => {
                    return (
                        <View
                            elevation={5}
                            key={activity.id}
                            style={Styles.taskCard}>
                            <Image
                                resizeMode="cover"
                                style={Styles.taskImage}
                                source={{
                                    uri: activity.photo,
                                }}
                            />

                            <View style={Styles.textContainer}>
                                <Text style={{fontSize: 12}}>
                                    Published {activity.published}
                                </Text>
                                <Text style={Styles.title}>
                                    {activity.title}
                                </Text>
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
                                            {'!'.repeat(activity.priority)}
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
                                            {activity.location}
                                        </Text>
                                    </View>
                                </View>
                                <Link
                                    to={`/activitydetail/:${activity.id}`}
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
            <Navigation activeTab={'activity'}></Navigation>
        </>
    );
};

export default Activity;
