import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from '../Styles';
import Navigation from './Navigation';
import SelectDropdown from 'react-native-select-dropdown';
import {Link} from 'react-router-native';

const countries = ['English', 'Slovak', 'German'];

export default function Profile() {
    return (
        <View style={Styles.bottomNav}>
            <View style={Styles.topBox}>
                <Text style={Styles.topText}>Account</Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={true}
                style={{
                    marginBottom: 75,
                }}>
                <View style={Styles.imageCircle}>
                    <Image
                        source={require('../assets/images/man-modified.png')}
                        style={Styles.profile_image}
                    />
                </View>

                <View style={Styles.buttonContainerWhite}>
                    <Text style={Styles.Button_box_white}>Janko Hrasko</Text>
                    <Text style={Styles.rep_box}>Reputation: 2</Text>
                </View>

                <SelectDropdown
                    defaultButtonText="Language"
                    buttonStyle={Styles.dropDownContainerGreen}
                    buttonTextStyle={Styles.Button_box_green}
                    rowTextStyle={Styles.dropDownStyle}
                    data={countries}
                    onSelect={(selectedItem, index) => {}}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                />

                <Link style={Styles.buttonContainerGreen} to={'/upvotes'}>
                    <Text style={Styles.Button_box_green}>Upvotes</Text>
                </Link>

                <TouchableOpacity style={Styles.buttonContainerGreen}>
                    <Text style={Styles.Button_box_green}>About</Text>
                </TouchableOpacity>
            </ScrollView>

            <Navigation activeTab="profile"></Navigation>
        </View>
    );
}
