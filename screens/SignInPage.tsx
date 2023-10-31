import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, HStack } from "native-base";
import ButtonDesign from "../components/ButtonDesign";


const SignInPage: React.FC = () => {
    const navigation: any = useNavigation();
    return (
        <NativeBaseProvider>
            <View style={{ backgroundColor: "white", flex: 1 }}>
                <Image
                    source={require("../assets/img/title.png")}
                    style={styles.img}
                    alt=""
                />
                <View style={styles.content}>
                    <Text style={styles.cText}>Get your groceries with nectar</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                        keyboardType="phone-pad"
                    />
                    <View style={{alignSelf:"center", marginTop:20}}>
                        <ButtonDesign
                            color={"#53B175"}
                            bttnText={"Next"}
                            navigation={navigation}
                            navigate={"NumberPage"}
                        />
                    </View>
                    <Text style={styles.text}>Or connect with social media</Text>
                    <TouchableOpacity>
                        <View style={styles.bttn}>
                            <HStack space={7} style={{ alignItems: "center" }}>
                                <View>
                                    <Image
                                        source={require("../assets/icon/google.png")}
                                        style={styles.logo}
                                        alt=""
                                    />
                                </View>
                                <Text style={styles.bTxt}>Continue with Google</Text>
                            </HStack>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.bttn, { backgroundColor: "#4A66AC", marginTop: 20 }]}>
                            <HStack space={7} style={{ alignItems: "center" }}>
                                <View>
                                    <Image
                                        source={require("../assets/icon/facebook.png")}
                                        style={styles.logo}
                                        alt=""
                                    />
                                </View>
                                <Text style={styles.bTxt}>Continue with Facebook</Text>
                            </HStack>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </NativeBaseProvider>

    )
}
export default SignInPage;

const styles = StyleSheet.create({
    img: {
        width: Layout.window.width,
        height: 350,
        resizeMode: "contain",
        marginLeft: 35
    },
    content: {
        height: 520,
        alignSelf: "center"
    },
    cText: {
        fontSize: 26,
        color: "#303030",
        fontWeight: "bold",
        letterSpacing: 1,
        width: 250,
        marginTop: 50

    },
    input: {
        marginTop: 40,
        fontSize: 16,
        color: '#030303',
        borderBottomWidth: 2,
        borderBottomColor: '#E2E2E2',
        width: 350
    },
    text: {
        fontSize: 14,
        color: "#828282",
        alignSelf: "center",
        marginTop: 40,
        letterSpacing: 0.5,
        fontWeight: "500"
    },
    bttn: {
        height: 60,
        width: Layout.window.width * 0.8,
        borderRadius: 19,
        backgroundColor: "#5383EC",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 20,
    },
    logo: {
        width: 35,
        height: 35,
        resizeMode: "contain",
        marginLeft: 30
    },
    bTxt: {
        fontSize: 18,
        color: "white",
        letterSpacing: 0.5
    }
});
