import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import getAxios from '../api/getAxios';
import {Styles} from '../Styles';
import Navigation from './Navigation';

export default function Map(props) {
    let material = '';

    const [markers, setMarkers] = useState([]);

    const fetchMarkers = async () => {
        const response = await getAxios()
            .get(`/${material}`)
            .catch(error => console.error(error));

        setMarkers(response.data);
    };

    useEffect(() => {
        if (JSON.stringify(props) !== '{}') {
            material = props.material;
            fetchMarkers();
        }
    }, [material]);

    return (
        <View style={{height: '100%'}}>
            <MapView
                minHeight={400}
                provider={PROVIDER_GOOGLE}
                style={Styles.map}
                initialRegion={{
                    latitude: 48.72,
                    longitude: 21.258056,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                showsUserLocation={true}>
                {markers.map(marker => {
                    return <Marker key={marker.id} coordinate={marker} />;
                })}
            </MapView>
            <Navigation activeTab={'map'}></Navigation>
        </View>
    );
}
