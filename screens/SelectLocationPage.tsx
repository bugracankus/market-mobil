import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, HStack } from "native-base";
import ButtonDesign from "../components/ButtonDesign";
import LoginPage from "./LoginPage";

const SelectLocationPage: React.FC = () => {
    const navigation: any = useNavigation();
    return (
        <NativeBaseProvider >
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <ImageBackground source={require("../assets/img/background.png")} style={styles.background} alt="">
                    <View style={styles.content}>
                        <Image
                            source={require("../assets/img/location.png")}
                            style={styles.img}
                        />
                        <Text style={styles.title}>Select Your Location</Text>
                        <Text style={styles.cTxt}>Swithch on your location to stay in tune with
                            what’s happening in your area
                        </Text>
                    </View>
                    <View style={styles.select}>
                        <TextInput
                            placeholder="Your Zone"
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Your Area"
                            style={styles.input}
                        />
                        <View style={{marginTop:50}}>
                            <ButtonDesign 
                            color={"#53B175"} 
                            bttnText={"Next"} 
                            navigation={navigation} 
                            navigate={LoginPage} />

                        </View>

                    </View>
                </ImageBackground>
            </View>
        </NativeBaseProvider>
    )
}
export default SelectLocationPage;

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
        alignItems: "center",
    },
    img: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    title: {
        fontSize: 25,
        fontWeight: "400",
        color: "#181725",
        letterSpacing: 0.5
    },
    cTxt: {
        fontSize: 16,
        width: 320,
        textAlign: "center",
        marginTop: 10
    },
    select: {
        height: 300,
        width: Layout.window.width * 0.9,
        alignSelf: "center",
        alignItems: "center",
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

});
