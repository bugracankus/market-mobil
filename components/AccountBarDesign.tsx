import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Layout from "../constants/Layout";
import { HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

interface AccountBarDesignProps {
    icon:any;
    name:string;
}   
export default function AccountBarDesign(props: AccountBarDesignProps) {

    return (

        <View style={styles.main}>
            <HStack>
                <View style={styles.iGround}>
                    <Image
                        source={props.icon}
                        style={styles.icon}
                        alt=""
                    />
                </View>
                <View style={styles.nGround}>
                    <Text style={styles.iText}>{props.name}</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.iGround}>
                        <Image
                            source={require("../assets/icon/backarrow.png")}
                            style={[styles.icon, { width: 20, height: 20, marginLeft:50}]}
                        />
                    </View>
                </TouchableOpacity>

            </HStack>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        borderBottomWidth: 2,
        height: 50,
        width: Layout.window.width * 0.9,
        borderColor: "#E2E2E2"
    },
    iGround: {
        height: 48,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    nGround: {
        height: 48,
        width: 260,
        justifyContent: "center",
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    iText: {
        color: "#181725",
        fontSize: 18,
        fontWeight: "700",
        letterSpacing: 0.5,
        marginLeft: 10,
    }
});