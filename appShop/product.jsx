import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Product({name, price}){
    return (
        <View style = {styles.container}>
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Text>Купить</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        width: "200",
        height: "300",
        alignItems: "center",
        justifyContent: "center"
    }
})