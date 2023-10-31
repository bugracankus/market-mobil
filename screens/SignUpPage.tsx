import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, HStack, VStack } from "native-base";
import ButtonDesign from "../components/ButtonDesign";
import HomePage from "./HomePage";
// kayıt ol 

const SignUpPage: React.FC = () => {
    const navigation: any = useNavigation();
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <ImageBackground source={require("../assets/img/background.png")} style={styles.background} alt="">
                    <View style={styles.content}>
                        <VStack >
                            <Image
                                source={require("../assets/icon/logoColor.png")}
                                style={styles.logo}
                                alt=""
                            />
                            <Text style={styles.txt}>Sign Up</Text>
                            <Text style={styles.cText}>Enter your credentials to continue</Text>
                            <TextInput
                                placeholder="User Name"
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="E-Mail"
                                style={[styles.input, { marginTop: 45 }]}
                            />
                             <TextInput
                                placeholder="Password"
                                style={[styles.input, { marginTop: 45 }]}
                            />
                        </VStack>
                        <View style={{ alignItems: "center", marginTop: 60 }}>
                            <ButtonDesign
                                color={"#53B175"}
                                bttnText={"Log In"}
                                navigation={navigation}
                                navigate={HomePage}
                            />
                        </View>
                        <View>
                            <HStack style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                                <Text style={styles.sText}>Already have an account? </Text>
                                <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
                                    <Text style={[styles.sText, { color: "#53B175" }]}>Login</Text>
                                </TouchableOpacity>
                            </HStack>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </NativeBaseProvider>
    )
}
export default SignUpPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    background: {
        width: Layout.window.width,
        height: Layout.window.height,
    },
    content: {
        alignSelf: "center",
        height: Layout.window.height,
        width: Layout.window.width * 0.93,
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 100
    },
    txt: {
        fontSize: 26,
        color: "#181725",
        fontWeight: "600",
        letterSpacing: 1,
        marginTop: 60
    },
    cText: {
        fontSize: 16,
        color: "#7C7C7C",
        letterSpacing: 0.5,
        marginTop: 5
    },
    input: {
        marginTop: 60,
        fontSize: 20,
        fontWeight: "500",
        color: '#7C7C7C',
        borderBottomWidth: 2,
        borderBottomColor: '#E2E2E2',
        width: 380
    },
    sText:{
        fontSize:14, 
        color:"#181725",
    }
});
