import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Layout from "../constants/Layout";
import { HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

interface ProductDesignProps {
    productImage: any;
    productName: string;
    productInfo: string;
    productPrice: string;
    navigation: any;
    navigate: any;
}
export default function ProductDesign(props: ProductDesignProps) {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate(props.navigate);
            }}
        >
            <View style={styles.main}>
                <VStack>
                    <View style={styles.container}>
                        <Image
                            source={props.productImage}
                            style={styles.prdct}
                            alt=""
                        />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.pName}>{props.productName}</Text>
                        <Text style={styles.pInfo}>{props.productInfo}</Text>
                        <HStack style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                            <Text style={styles.pText}>{props.productPrice}</Text>
                            <TouchableOpacity>
                                <View style={styles.bttn}>
                                    <Image
                                        source={require("../assets/icon/Vector.png")}
                                        alt=""
                                    />
                                </View>
                            </TouchableOpacity>
                        </HStack>
                    </View>
                </VStack>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    main: {
        height: 240,
        width: 170,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#E2E2E2"
    },
    container: {
        height: 110,
        width: 160,
        alignSelf: "center",
        marginTop: 5
    },
    prdct: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 15,
        resizeMode: "contain"
    },
    pName: {
        fontSize: 18,
        color: "#181725",
        fontWeight: "600",
        alignSelf: "center"
    },
    pInfo: {
        fontSize: 16,
        color: "#7C7C7C",
        marginLeft: 10
    },
    bttn: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: "#53B175",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20
    },
    pText: {
        fontSize: 18,
        color: "#181725",
        fontWeight: "700",
        width: 70
    }
});