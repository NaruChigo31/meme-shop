import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Product({name, price}){
    return (
        <View style = {styles.container}>
            <Image style={styles.imageStyle} source={{uri: 'https://i.imgflip.com/7p7zts.png',}}/>
            <View style={styles.nameView}>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <View style={styles.lowerView}>
                <Text style={styles.lowerText}>{price}$</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.lowerText}>Buy</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: 250,
        height: 360,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 30,
        gap: 10,
        backgroundColor:"#8E8FFA",
        borderColor: "#190482",
        borderWidth: 2
    },
    imageStyle: {
        width: 190,
        height: 190,
        borderRadius: 5,
        borderColor: "#190482",
        borderWidth: 2

    },
    nameView: {
        borderRadius: 5,
        backgroundColor: "#C2D9FF",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    nameText:{
        color: "#190482",
        fontSize: 20
    },
    lowerView:{
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection:"row",
        paddingHorizontal: 10
    },
    lowerText:{
        color: "#fff",
        fontSize: 18
    },
    button:{
        backgroundColor: "#7752FE",
        borderRadius: 5,
        borderColor: "#190482",
        borderWidth: 2,
        paddingHorizontal: 25,
        paddingVertical: 5,
    }
})