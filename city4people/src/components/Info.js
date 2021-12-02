import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import InfoCard from "./InfoCard";
import getAxios from "../api/getAxios";
import Navigation from "./Navigation";
import {Styles} from "../Styles";

export default function Info(){

export default function Info() {
    const [infoList, setInfoList] = useState([]);

    const fetchTaskList = async () => {
        const response = await getAxios().get('infos');
        setInfoList(response.data);
    };

    useEffect(() => {
        fetchTaskList();
    }, []);

    return (
        <>
            <ScrollView
                style={{
                    backgroundColor: '#EEEEEE',
                    display: 'flex',
                    flex: 0,
                    marginBottom: 75,
                }}>
                {infoList.map(info =>

                    <InfoCard
                            key={info.id}
                            style={{flex: 1}}
                            id={info.id}
                            title={info.title}
                            src={info.photo}/>)}
            </ScrollView>
            <Navigation style={Styles.bottomNav} activeTab="info"></Navigation>
        </>
    );
}
