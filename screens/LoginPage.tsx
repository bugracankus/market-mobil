import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { HStack, NativeBaseProvider, VStack } from "native-base";
import { TextInput } from "react-native-gesture-handler";
import ButtonDesign from "../components/ButtonDesign";
import HomePage from "./HomePage";


const LoginPage: React.FC = () => {
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
                            <Text style={styles.txt}>Loging</Text>
                            <Text style={styles.cText}>Enter your emails and password</Text>
                            <TextInput
                                placeholder="E-Mail"
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Password"
                                style={[styles.input, { marginTop: 65 }]}
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
                            <HStack style={{justifyContent:"center", alignItems:"center", marginTop:20}}>
                                <Text style={styles.sText}>Don’t have an account? </Text>
                                <TouchableOpacity onPress={() => navigation.navigate("SignInPage")}>
                                    <Text style={[styles.sText,{color:"#53B175"}]}>Singup</Text>
                                </TouchableOpacity>
                            </HStack>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </NativeBaseProvider>

    )
}
export default LoginPage;

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
