import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {Link} from 'react-router-native';
import {Divider} from 'react-native-elements';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {Styles} from '../Styles';

const Login = () => {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={[Styles.titleLogin, {paddingTop: 50}]}>Login</Text>
            </View>
            <View style={{flex: 2, alignItems: 'center'}}>
                <View style={{width: 320}}>
                    <View
                        style={[
                            Styles.inputBox,
                            {marginBottom: 45, borderColor: '#1faa00'},
                        ]}>
                        <Text style={Styles.label}>Nickname</Text>
                        <TextInput style={Styles.inputBoxText} maxLength={20} />
                    </View>
                    <View
                        style={[
                            Styles.inputBox,
                            {marginBottom: 45, borderColor: '#1faa00'},
                        ]}>
                        <Text style={Styles.label}>Password</Text>
                        <TextInput
                            style={Styles.inputBoxText}
                            secureTextEntry={true}
                            maxLength={20}
                        />
                    </View>
                </View>
            </View>
            <View style={{flex: 1}}>
                <Link style={Styles.button} to={'/Home'}>
                    <Text style={Styles.buttonText}>Login</Text>
                </Link>
                <Divider
                    style={{marginTop: 45, width: 250, alignSelf: 'center'}}
                    width={2}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 16,
                        width: 250,
                        alignSelf: 'center',
                    }}>
                    <Text style={[Styles.label, {color: '#9A9A9A'}]}>
                        Do not have a City4People account?
                    </Text>
                    <Pressable>
                        <Text style={[Styles.label, {color: '#1faa00'}]}>
                            {' '}
                            Register
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Login;
