import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Layout from "../constants/Layout";
import { HStack, VStack } from "native-base";
interface SearchBarDesignProps {

}
export default function SearchBarDesign(props: SearchBarDesignProps) {
    return (
        <View style={styles.main}>
            <HStack space={5}>
                <Image
                    source={require("../assets/icon/search.png")}
                    style={styles.logo}
                />
                <Text style={styles.sText}>Search Store</Text>
            </HStack>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        height: 50,
        width: 370,
        alignSelf: "center",
        borderRadius: 15,
        backgroundColor: "#F2F3F2",
        justifyContent:"center"
    },
    logo: {
        width: 25,
        height: 25,
        resizeMode: "contain",
        marginLeft:20
    },
    sText:{
        fontSize:18, 
        color:"#7C7C7C"
    }
});