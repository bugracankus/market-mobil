import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Layout from "../constants/Layout";
import { HStack } from "native-base";

const CounterDesign = () => {
    const [counter, setCounter] = useState(1);

    const increaseCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(prevCounter => prevCounter - 1);
        }
    };

    return (

        <View style={styles.main}>
            <HStack space={1}>
                <TouchableOpacity onPress={decreaseCounter}>
                    <View style={styles.iMain}>
                        <Image
                            source={require("../assets/icon/-Icon.png")}
                            style={styles.icon}
                            alt=""
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.counter}>
                    <Text style={styles.tCounter}>{counter}</Text>
                </View>
                <TouchableOpacity onPress={increaseCounter}>
                    <View style={styles.iMain}>
                        <Image
                            source={require("../assets/icon/plusIcon.png")}
                            style={styles.icon}
                            alt=""
                        />
                    </View>
                </TouchableOpacity>
            </HStack>
        </View>
    );
};

export default CounterDesign;

const styles = StyleSheet.create({
    main: {
        height: 45,
        width: 130,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    iMain: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    counter: {
        width: 40,
        height: 40,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "#E2E2E2"
    },
    tCounter: {
        fontSize: 18,
        color: "#181725"
    }
});