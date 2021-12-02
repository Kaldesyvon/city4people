import {StyleSheet} from 'react-native';

export let Styles;
Styles = StyleSheet.create({
    text: {
        color: 'black',
    },

    textWhite: {
        color: 'white',
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

    heading: {
        fontSize: 18,
        fontWeight: '600',
        margin: 10,
        // marginBottom: 13,
    },

    subHeading: {
        fontSize: 15,
        marginTop: 10,
        marginHorizontal: 10,
        // marginBottom: 13,
    },

    subSubHeading: {
        fontWeight: 'bold',
        fontSize: 15,
        marginHorizontal: 10,
        marginTop: 5,
    },

    subSubSubHeading: {
        fontSize: 15,
        marginHorizontal: 5,
        marginTop: 5,
    },

    Upvotecard: {
        margin: '5%',
        backgroundColor: 'white',
        borderRadius: 25,
        left: '10%',
        height: 150,
        width: '70%',
    },

    elevationGreen: {
        elevation: 20,
        shadowColor: 'green',
    },

    elevationRed: {
        elevation: 20,
        shadowColor: 'red',
    },

    upvoteCardRed: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 25,
        borderColor: 'red',
        borderWidth: 2,
    },

    upvoteCardGreen: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 25,
        borderColor: 'green',
        borderWidth: 2,
    },

    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    upvoteLocation: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    upvotesTitle: {
        color: 'black',
        margin: 5,
        fontWeight: 'bold',
        fontSize: 20,
    },

    topBox: {
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    topText: {
        color: '#00DB16',
        left: '140%',

        fontSize: 50,
    },

    bottomNav: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },

    imageCircle: {
        width: 300,
        height: 300,
        borderRadius: 300 / 2,
        backgroundColor: '#00DB16',
        justifyContent: 'center',
        alignItems: 'center',
        left: '12%',
        // top: '10%'
    },

    buttonContainerWhite: {
        borderColor: 'black',
        borderWidth: 2,
        width: 200,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        top: '1%',
        left: '25%',
    },

    buttonContainerGreen: {
        borderColor: '#00DB16',
        borderWidth: 5,
        width: 300,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'white',
        // top: '20%',
        left: '9%',
        margin: 15,
    },

    dropDownContainerGreen: {
        borderColor: '#00DB16',
        borderWidth: 5,
        width: 300,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'white',
        // top: '40%',
        left: '5%',
        margin: 15,
    },

    dropDownStyle: {
        fontSize: 30,
    },

    Button_box_white: {
        color: 'black',
        textAlign: 'center',
        margin: 2,
        fontWeight: 'bold',
    },

    rep_box: {
        color: 'black',
        textAlign: 'center',
    },

    Button_box_green: {
        color: 'black',
        textAlign: 'center',
        margin: 5,
        fontWeight: 'bold',
        fontSize: 40,
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        flex: 1,
    },

    profile_image: {
        height: 250,
        width: 250,
        alignItems: 'center',
    },

    card: {
        margin: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        marginBottom: '20%',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: '5%',
    },

    buton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderEndWidth: 0,
        backgroundColor: '#1FAA00',
        borderRadius: 25,
        height: 45,
        marginHorizontal: 20,
    },

    img: {
        position: 'relative',
        borderRadius: 25,
        width: '100%',
        marginBottom: '5%',
    },

    taskCard: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 25,
        shadowColor: 'green',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },

    taskImage: {
        width: 320,
        height: 160,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
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
    logo: {
        marginTop: 100,
        alignSelf: 'center',
        width: 180,
        height: 180,
    },
    button: {
        alignItems: 'center',
        width: 250,
        height: 55,
        alignSelf: 'center',
        marginTop: 40,
        paddingTop: 12,
        backgroundColor: '#1faa00',
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleLogin: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1faa00',
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 3,
    },
    inputBoxText: {
        fontSize: 16,
        paddingTop: 5,
    },
    inputBox: {
        height: 60,
        paddingLeft: 8,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
    },
    detailCointainer: {
        backgroundColor: 'white',
        width: '80%',
        flex: 0,
        borderRadius: 25,
        marginTop: 20,
        marginBottom: 20,
        shadowColor: 'green',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    image1: {
        height: 200,
        width: 340,
    },
    marginButton: {
        marginLeft: '15%',
    },
    navBar: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: '10%',
        width: '100%',
        backgroundColor: 'white',
    },
    navButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '20%',
        height: '100%',
    },
});
