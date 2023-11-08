import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Layout from "../constants/Layout";
import { HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CounterDesign from "./CounterDesign";

interface ProductCartDesignProps {
    productImage: any;
    productName: string;
    productInfo: string;
    productPrice: string;
}
export default function ProductCartDesign(props: ProductCartDesignProps) {
    return (
        <View style={styles.main}>
            <HStack>
                <View style={styles.iGround}>
                    <Image
                        source={props.productImage}
                        style={styles.pImg}
                    />
                </View>
                <View style={styles.content}>
                    <VStack space={2} style={{ marginTop: 20, marginLeft: 10 }}>
                        <Text style={styles.pText}>{props.productName}</Text>
                        <Text style={styles.cText}>{props.productInfo}</Text>
                        <CounterDesign />
                    </VStack>
                </View>
                <View style={styles.pGround}>
                    <VStack space={10} style={{ marginTop: 20, marginLeft: 10 }}>
                        <Image
                            source={require("../assets/icon/closeIcon.png")}
                            style={styles.icon}
                            alt=""
                        />
                        <Text style={[styles.pText, { marginTop: 10, marginLeft: 15 }]}>{props.productPrice}</Text>
                    </VStack>
                </View>
            </HStack>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        borderBottomWidth: 2,
        borderColor: "#E2E2E2",
        height: 150,
        width: Layout.window.width * 0.9,
    },
    iGround: {
        height: 150,
        width: 90,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        height: 150,
        width: 200
    },
    pGround: {
        height: 150,
        width: 80
    },
    pImg: {
        width: 80,
        height: 80,
        resizeMode:"contain"
    },
    pText: {
        fontSize: 16,
        color: "#181725",
        fontWeight: "600",
        letterSpacing: 0.5,
    },
    cText: {
        color: "#7C7C7C",
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        marginLeft: 35
    }

});