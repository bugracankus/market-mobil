import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import { HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

const NavigationBar = () => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.main}>
            <HStack space={1}>
                <TouchableOpacity>
                    <View style={styles.bttn}>
                        <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={require("../assets/navigationBar/shop.png")}
                                style={styles.icon}
                                alt=""
                            />
                            <Text style={styles.iText}>Shop</Text>
                        </VStack>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.bttn}>
                        <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={require("../assets/navigationBar/explore.png")}
                                style={styles.icon}
                                alt=""
                            />
                            <Text style={styles.iText}>Explore</Text>
                        </VStack>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.bttn}>
                        <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={require("../assets/navigationBar/cart.png")}
                                style={styles.icon}
                                alt=""
                            />
                            <Text style={styles.iText}>Cart</Text>
                        </VStack>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.bttn}>
                        <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={require("../assets/navigationBar/favourite.png")}
                                style={styles.icon}
                                alt=""
                            />
                            <Text style={styles.iText}>Favourite</Text>
                        </VStack>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.bttn}>
                        <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={require("../assets/navigationBar/account.png")}
                                style={styles.icon}
                                alt=""
                            />
                            <Text style={styles.iText}>Account</Text>
                        </VStack>
                    </View>
                </TouchableOpacity>
            </HStack>
        </View>
    );
};

export default NavigationBar;
//----STYLE-----
const styles = StyleSheet.create({
    main: {
        height: 70,
        width: Layout.window.width,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderWidth:0.5,
        borderColor:"#555E58"
    },
    bttn: {
        height: 70,
        width: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode:"contain"
    },
    iText: {
        fontSize: 12,
        color: "#000000"
    }
});