import React from 'react';
import Icon from 'react-native-ionicons';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';
import {Styles} from '../Styles';

function Navigation(props) {
    const activeTab = props.activeTab;

    const getActiveTab = name => {
        return activeTab !== name ? 'black' : '#00DB16';
    };

    return (
        <View style={Styles.navBar}>
            <Link style={Styles.navButton} to={'/home'}>
                <View style={{alignItems: 'center'}}>
                    <Icon name={'list'} color={getActiveTab('home')} />
                    <Text style={{color: `${getActiveTab('home')}`}}>Issues</Text>
                </View>
            </Link>
            <Link style={Styles.navButton} to={'/activity'}>
                <View style={{alignItems: 'center'}}>
                    <Icon name={'flag'} color={getActiveTab('activity')} />
                    <Text style={{color: `${getActiveTab('activity')}`}}>
                        Events
                    </Text>
                </View>
            </Link>
            <Link style={Styles.navButton} to={'/map'}>
                <View style={{alignItems: 'center'}}>
                    <Icon name={'map'} color={getActiveTab('map')} />
                    <Text style={{color: `${getActiveTab('map')}`}}>Map</Text>
                </View>
            </Link>
            <Link style={Styles.navButton} to={'/profile'}>
                <View style={{alignItems: 'center'}}>
                    <Icon name={'person'} color={getActiveTab('profile')} />
                    <Text style={{color: `${getActiveTab('profile')}`}}>
                        Profile
                    </Text>
                </View>
            </Link>
            <Link style={Styles.navButton} to={'/info'}>
                <View style={{alignItems: 'center'}}>
                    <Icon
                        name={'information-circle'}
                        color={getActiveTab('info')}
                    />
                    <Text style={{color: `${getActiveTab('info')}`}}>Info</Text>
                </View>
            </Link>
        </View>
    );
}

export default Navigation;
