import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Layout from "../constants/Layout";
import { HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

interface Product2DesignProps {
    backgroundColor: any;
    borderColor: any;
    productImage: any;
    prodcutName: string;
    navigation: any;
    navigate: any;
}
export default function Product2Design(props: Product2DesignProps) {
    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate(props.navigate);
        }}>
            <View style={[styles.main, { backgroundColor: props.backgroundColor, borderColor: props.borderColor }]}>
                <View style={{ position: "absolute" }}>
                    <VStack style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                        <View >
                            <Image
                                source={props.productImage}
                                style={styles.img}
                                alt=""
                            />
                        </View>
                        <Text style={styles.prdctName}>{props.prodcutName}</Text>
                    </VStack>
                </View>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    main: {
        borderWidth: 2,
        height: 180,
        width: 170,
        borderRadius: 18,
        backgroundColor: "rgba(83, 177, 117, 0.10)",
        borderColor: "rgba(83, 177, 117, 0.70)",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        borderWidth: 1,
        height: 100,
        width: 100,
        resizeMode: "contain"
    },
    prdctName: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "600",
        color: "#181725",
        width: 90
    }
});