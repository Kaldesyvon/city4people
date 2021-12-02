import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native';
import BouncyCheckBox from 'react-native-bouncy-checkbox';

import {Styles} from '../Styles';
import Navigation from './Navigation';
import {Link} from 'react-router-native';

export default function Formular() {
    return (
        <>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 2, alignItems: 'center'}}>
                    <View style={{marginTop: 45, width: 320}}>
                        <View
                            style={[
                                Styles.inputBox,
                                {marginBottom: 45, borderColor: '#1faa00'},
                            ]}>
                            <Text style={Styles.label}>Name</Text>
                            <TextInput
                                style={Styles.inputBoxText}
                                maxLength={20}
                            />
                        </View>

                        <View
                            style={[
                                Styles.inputBox,
                                {marginBottom: 45, borderColor: '#1faa00'},
                            ]}>
                            <Text style={Styles.label}>Surname</Text>
                            <TextInput
                                style={Styles.inputBoxText}
                                maxLength={20}
                            />
                        </View>
                        <View
                            style={[
                                Styles.inputBox,
                                {marginBottom: 45, borderColor: '#1faa00'},
                            ]}>
                            <Text style={Styles.label}>E-mail</Text>
                            <TextInput
                                style={Styles.inputBoxText}
                                maxLength={100}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <BouncyCheckBox fillColor={'#1faa00'} />
                            <Text style={{color: 'black'}}>
                                I agree with Terms
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                            }}>
                            <Link to={'/activity'}>
                                <View
                                    style={[
                                        Styles.outerbutton,
                                        Styles.marginButton,
                                    ]}>
                                    <Text style={{color: 'white'}}>Back</Text>
                                </View>
                            </Link>
                            <TouchableOpacity
                                style={[
                                    Styles.outerbutton,
                                    Styles.marginButton,
                                ]}>
                                <Text style={{color: 'white'}}>Send</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <Navigation activeTab={'activity'}></Navigation>
        </>
    );
}
