import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Map = () => {

    const markers = new Array();
    markers.push({key: 0, latitude: 41.303921, longitude: -81.901693});

    return (
        <View style={{height:'89%'}}>
            <MapView
                minHeight={400}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 41.303921,
                    longitude: -81.901693,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                showsUserLocation={true}>
                    {markers.map((marker) => {
                         return(
                            <Marker key={marker.key} coordinate={marker}/>
                        )
                    })}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black',
    },
    mapContainer: {
        height: 'auto',
        width: 'auto',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Map;