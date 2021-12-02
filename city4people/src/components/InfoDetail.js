import {Image, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../Styles';
import {Link, useParams} from 'react-router-native';
import getAxios from '../api/getAxios';
import Icon from 'react-native-ionicons';

export default function InfoDetail() {
    let {id} = useParams();

    const [info, setInfo] = useState();

    const fetchTask = async () => {
        const response = await getAxios().get(`info/${id}`);

        setInfo(response.data);
    };

    useEffect(() => {
        fetchTask();
    }, []);

    if (!info) {
        return (
            <View>
                <Text>404 Not found!</Text>
            </View>
        );
    }

    return (
        <ScrollView
            alignItems="center"
            style={{marginBottom: 75, display: 'flex'}}>
            <View style={Styles.detailCointainer}>
                <Text style={{marginLeft: 16, marginTop: 16, fontSize: 12}}>
                    {info.published}
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
                    {info.title}
                </Text>
                <Image
                    resizeMode="cover"
                    style={Styles.image1}
                    source={{
                        uri: info.photo,
                    }}
                />
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
                        {info.details}
                    </Text>
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 16,
                    }}>
                    <Link
                        to={'/info'}
                        style={[
                            Styles.outerbutton,
                            {flex: 1, marginHorizontal: 15},
                        ]}>
                        <View style={Styles.innerButton}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'white',
                                }}>
                                Back
                            </Text>
                            <Icon name="arrow-back" size={20} color="white" />
                        </View>
                    </Link>
                    <Link
                        to={'/map/' + (info.id === 0 ? 'papers' : 'metals')}
                        style={[
                            Styles.outerbutton,
                            {flex: 1, marginHorizontal: 15},
                        ]}>
                        <View style={Styles.innerButton}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'white',
                                    marginRight: 5,
                                }}>
                                Find on map
                            </Text>
                            <Icon name="pin" size={20} color="white" />
                        </View>
                    </Link>
                </View>
            </View>
        </ScrollView>
    );
}
