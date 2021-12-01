import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import InfoCard from "./InfoCard";
import getAxios from "../api/getAxios";
import Navigation from "./Navigation";
import {Styles} from "../Styles";

export default function Info(){

    const [infoList, setInfoList] = useState([]);

    const fetchTaskList = async () => {
        const response = await getAxios().get('infos');

        setInfoList(response.data);
    };

    useEffect(() => {
        fetchTaskList();
    }, []);

    return(
        <>
            <ScrollView style={{
                    backgroundColor: '#EEEEEE',
                    display: 'flex',
                    flex: 0,
                    marginBottom: 75,
                }}>
                {infoList.map(info =>

                    <InfoCard style={{flex: 1}}
                              id={info.id}
                              published={info.published}
                              title={info.title}
                              detail={info.detail}
                              src={info.photo}/>)}
                {infoList.map(info => console.log(info.photo))}
            </ScrollView>
            <Navigation
                style = {Styles.bottomNav}
                activeTab='info'>
            </Navigation>
        </>
    )
}