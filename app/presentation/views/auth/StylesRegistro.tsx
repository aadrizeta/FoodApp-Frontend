import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#F2F2F2',
    },
    texto: {
        color: '#242424',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop: "6%",
    },
    contenedorImagen: {
        alignItems: "center",
        marginTop: "8%",
    },
    imagen: {
        width: 150,
        height: 150,
    },
    formContainer: {
        width: "90%",
        backgroundColor: "white",
        marginHorizontal: "auto", // Removed the stray slash here
        marginTop: "7%",
        paddingVertical: 25,
        paddingHorizontal: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formTitle: {
        fontSize: 20,
        fontWeight: '600', // Corrected from 600 to string '600'
        marginBottom: 25,
        borderBottomWidth: 1,
        paddingBottom: 9,
        color: "#242424",
        borderBottomColor: "#242424",
    },
});

export default styles;
