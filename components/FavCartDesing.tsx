import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Layout from "../constants/Layout";
import { HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

interface FavCartDesingProps {
    productImage: any;
    productName: string;
    productInfo: string;
    prodcutPrice: string;
}
export default function FavCartDesing(props: FavCartDesingProps) {
    return (
        <View style={styles.main}>
            <HStack>
                <View style={styles.iGround}>
                    <Image
                        source={props.productImage}
                        style={styles.img}
                        alt=""
                    />
                </View>
                <View style={styles.cGround}>
                    <VStack space={3} style={{ marginLeft: 7 }}>
                        <Text style={styles.prdctName}>{props.productName}</Text>
                        <Text style={styles.prdctInfo}>{props.productInfo}</Text>
                    </VStack>

                </View>
                <View style={styles.pGround}>
                    <HStack style={{ justifyContent: "center", alignItems: "center", marginTop: 40 }} space={2}>
                        <Text style={[styles.prdctName, { width: 50 }]}>{props.prodcutPrice}</Text>
                        <Image
                            source={require("../assets/icon/backIcon.png")}
                            style={styles.icon}
                        />
                    </HStack>
                </View>
            </HStack>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        height: 120,
        width: Layout.window.width * 0.9,
        borderBottomWidth: 2,
        borderColor: "#E2E2E2"
    },
    iGround: {
        height: 120,
        width: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    cGround: {
        height: 120,
        width: 200,
        justifyContent: "center"
    },
    pGround: {
        height: 120,
        width: 90,
    },
    img: {
        width: 45,
        height: 90,
        resizeMode: "contain"
    },
    prdctName: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "600",
        color: "#181725",
        width: 90
    },
    prdctInfo: {
        color: "#7C7C7C",
        fontSize: 15,
        marginLeft: 5
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    }
});