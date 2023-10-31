import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import Layout from "../constants/Layout";
import ButtonDesign from "../components/ButtonDesign";
import { useNavigation } from "@react-navigation/native";


const OnbordingPage: React.FC = () => {
    const navigation: any = useNavigation();
    return (
        <View>
            {/* //----Background image-----// */}

            <ImageBackground source={require("../assets/img/human.png")} style={styles.human} alt="">
                {/* //----Content---- */}
                <View style={styles.content}>
                    <Image
                        source={require("../assets/icon/logo.png")}
                        style={styles.logo}
                        alt=""
                    />
                    <Text style={styles.cText}>Welcome to our store</Text>
                    <Text style={styles.text}>Ger your groceries in as fast as one hour</Text>

                    {/* //-----CustomButton-----/// */}

                    <ButtonDesign
                        color={"#53B175"}
                        bttnText={"Get Started"}
                        navigation={navigation}
                        navigate={"LoginPage"}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}
export default OnbordingPage;

const styles = StyleSheet.create({
    human: {
        width: Layout.window.width * 1,
        height: Layout.window.height * 1,
        resizeMode: "contain",
    },
    content: {
        height: Layout.window.height * 0.35,
        width: Layout.window.width * 0.9,
        marginTop: Layout.window.height * 0.55,
        alignSelf: "center",
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "column"
    },
    logo: {
        width: 48,
        height: 56,
        resizeMode: "contain"
    },
    cText: {
        fontSize: 35,
        color: "white",
        fontWeight: "bold",
        letterSpacing: 1,
        width: 195,
        height: 100,
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        color: "#FCFCFC",
        opacity: 0.6,
    }
});
