import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Styles} from "../Styles";

export default function Map () {

    const markers = new Array();
    markers.push({key: 0, latitude: 41.303921, longitude: -81.901693});

    return (
        <View style={{height:'89%'}}>
            <MapView
                minHeight={400}
                provider={PROVIDER_GOOGLE}
                style={Styles.map}
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