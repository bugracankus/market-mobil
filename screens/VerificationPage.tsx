import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, HStack } from "native-base";
import ButtonDesign from "../components/ButtonDesign";

const VerificationPage: React.FC = () => {
    const navigation: any = useNavigation();
    return (
        <NativeBaseProvider >
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <ImageBackground source={require("../assets/img/background.png")} style={styles.background} alt="">
                    <View style={styles.content}>
                        <Text style={styles.title}>Enter your 4-digit code</Text>
                        <TextInput
                            placeholder="Digit Code"
                            style={styles.input}
                            keyboardType="phone-pad"
                        />
                    </View>
                    <Image
                        source={require("../assets/icon/logoColor.png")}
                        style={styles.logo}
                        alt=""
                    />
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 40 }}>
                        <ButtonDesign
                            color={"#53B175"}
                            bttnText={"Next"}
                            navigation={navigation}
                            navigate={"SelectLocationPage"}
                        />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 40 }}>
                        <ButtonDesign
                            color={"#53B175"}
                            bttnText={"Rest Code"}
                            navigation={navigation}
                            navigate={""}
                        />
                    </View>
                </ImageBackground>
            </View>
        </NativeBaseProvider>
    )
}
export default VerificationPage;

const styles = StyleSheet.create({
    background: {
        width: Layout.window.width,
        height: Layout.window.height,
    },
    content: {
        height: 300,
        width: Layout.window.width * 0.9,
        marginTop: 120,
        alignSelf: "center",
    },
    title: {
        fontSize: 26,
        color: "#181725",
        fontWeight: "500",
        letterSpacing: 0.5,
    },
    input: {
        fontSize: 20,
        fontWeight: "500",
        color: '#7C7C7C',
        borderBottomWidth: 2,
        borderBottomColor: '#E2E2E2',
        width: Layout.window.width * 0.87,
        marginTop: 45
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        resizeMode: "contain",
        opacity: 0.5,
    }
});
