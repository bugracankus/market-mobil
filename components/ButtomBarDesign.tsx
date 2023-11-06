import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Layout from "../constants/Layout";
import { HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

interface ButtomBarDesignProps {

}
export default function ButtomBarDesign(props: ButtomBarDesignProps) {
    const navigation: any = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.main}>
            <HStack style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={handleBackPress}>
                    <View style={[styles.ground]}>
                        <Image
                            source={require("../assets/icon/backIcon.png")}
                            style={[styles.icon, { width: 20, height: 25 }]}
                            alt=""
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.title}></View>
                <TouchableOpacity>
                    <View style={styles.ground}>
                        <Image
                            source={require("../assets/icon/shareIcon.png")}
                            style={styles.icon}
                            alt=""
                        />
                    </View>
                </TouchableOpacity>
            </HStack>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        height: 45,
        width: Layout.window.width,
        marginTop: 50
    },
    ground: {
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        height: 45,
        width: Layout.window.width * 0.73
    },
    icon: {
        width: 20,
        height: 38,
        resizeMode: "contain",
    }
});