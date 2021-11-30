import {StyleSheet} from 'react-native';

export let Styles;
Styles = StyleSheet.create({
    taskCard: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    taskImage: {
        width: 320,
        height: 160,
        borderRadius: 25,
    },
    textContainer: {
        margin: 16,
    },
    title: {
        fontWeight: '400',
        fontSize: 20,
        color: 'black',
        marginTop: 8,
    },
    outerbutton: {
        backgroundColor: '#1FAA00',
        width: 100,
        height: 40,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    innerButton: {
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
