import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Layout from "../constants/Layout";
import { HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

interface ButtomBarNameProps {
    title: string;
}
export default function ButtomBarName(props: ButtomBarNameProps) {
    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 70
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#181725",
        letterSpacing: 0.5,
    }
});