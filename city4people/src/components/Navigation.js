import React from 'react';
import Icon from 'react-native-ionicons';
import {View} from 'react-native';
import {Link} from 'react-router-native';
import {Styles} from '../Styles';

function Navigation(props) {
    const activeTab = props.activeTab;

    const getActiveTab = name => {
        return activeTab == name ? 'black' : '#00DB16';
    };

    console.log(props);

    return (
        <View style={Styles.navBar}>
            <Link style={Styles.navButton} to={'/home'}>
                <Icon name={'home'} color={getActiveTab('home')} />
            </Link>
            <Link style={Styles.navButton} to={'/home'}>
                <Icon name={'flag'} color={getActiveTab('issue')} />
            </Link>
            <Link style={Styles.navButton} to={'/map'}>
                <Icon name={'map'} color={getActiveTab('map')} />
            </Link>
            <Link style={Styles.navButton} to={'/profile'}>
                <Icon name={'person'} color={getActiveTab('profile')} />
            </Link>
            <Link style={Styles.navButton} to={'/info'}>
                <Icon
                    name={'information-circle'}
                    color={getActiveTab('info')}
                />
            </Link>
        </View>
    );
}

export default Navigation;
