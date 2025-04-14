
import { Text,View,Image, StyleSheet } from "react-native";
import React from "react";


export default function Home() {
    return (
        <View style={style.container}>
            <Text> Home</Text>
        </View>
    );
}


const style = StyleSheet.create({
    container :{flex:1, alignItems:"center"}
})