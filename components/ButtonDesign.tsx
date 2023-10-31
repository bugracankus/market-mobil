import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";
interface ButtonDesignProps {
    color:string,
    bttnText:string,
    navigation: any;
    navigate: any;
}
export default function ButtonDesign(props: ButtonDesignProps) {
    return (
        <TouchableOpacity  onPress={() => {
            props.navigation.navigate(props.navigate);
          }}>
            <View style={[styles.bttn,{backgroundColor:props.color}]}>
                <Text style={styles.bText}>{props.bttnText}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bttn: {
        height: 60,
        width: Layout.window.width * 0.8,
        borderRadius: 19,
        justifyContent: "center",
        alignItems: "center"
    },
    bText: {
        fontSize: 20,
        color: "white"
    }
});