import {StyleSheet} from "react-native";

export let Styles;
Styles = StyleSheet.create({
    text: {
        color: 'black',
    },

    textWhite: {
        color: "white"
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

    logo: {
        marginTop: 100,
        alignSelf: 'center',
        width: 170,
        height: 170,
    },

    button: {
        alignItems: 'center',
        width: 250,
        height: 55,
        alignSelf: 'center',
        marginTop: 35,
        // padding: 15,
        paddingTop: 12,
        backgroundColor: '#1faa00',
        borderRadius: 50,
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    button_container_white: {
        margin: 20,
        borderColor: 'black',
        borderWidth: 2,
        width: 150,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',


    },

    button_container_green: {
        margin: 20,
        borderColor: '#00DB16',
        borderWidth: 5,
        width: 220,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#EEEEEE',


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
        fontSize: 20

    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },

    profile_image: {
        height: 150,
        width: 150,
        alignItems: 'center',
    },

    card: {
        margin: "5%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 25,
        marginBottom: "20%"
    },

    row: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        marginVertical: "5%"
    },

    buton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "lightgray",
        borderEndWidth: 0,
        backgroundColor: "#1FAA00",
        borderRadius: 25,
        height: 45,
        marginHorizontal: 20
    },

    img: {
        position: "relative",
        borderRadius: 25,
        width: "100%",
        marginBottom: "5%"
    }
});