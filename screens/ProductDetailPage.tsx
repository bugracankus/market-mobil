import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { HStack, NativeBaseProvider, VStack } from "native-base";
import ButtomBarDesign from "../components/ButtomBarDesign";
import CounterDesign from "../components/CounterDesign";
import ButtonDesign from "../components/ButtonDesign";
import { ScrollView } from "react-native-gesture-handler";


const ProductDetailPage: React.FC = () => {
    const navigation: any = useNavigation();
    const [touch, setTouch] = React.useState(false);
    return (

        <NativeBaseProvider>

            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={styles.main}>
                    <ButtomBarDesign />
                    <View style={styles.iGround}>
                        {/* <ProductListDesig/>   */}
                        {/* // ! => ScrolList düzenlenecek  */}
                        <Image
                            source={require("../assets/products/product2.png")}
                            alt=""
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.content}>
                        <View>
                            <Text style={styles.pName}>Naturel Red Apple</Text>
                            <Text style={styles.detail}>1kg, Price</Text>
                            <HStack style={{ marginTop: 20, alignItems: "center" }}>
                                <CounterDesign />
                                <Text style={styles.price}>$4.90</Text>
                            </HStack>
                        </View>
                        {/* -----LINE---- */}
                        <View style={styles.line}></View>
                        <View style={{ marginTop: 35 }}>
                            <HStack>
                                <Text style={[styles.pName, { fontSize: 20, width: 340 }]}>Product Detail</Text>
                                <TouchableOpacity onPress={() => { setTouch(!touch) }}>
                                    <Image
                                        source={require("../assets/icon/backIcon.png")}
                                        style={[styles.icon, { transform: [{ rotate: touch == true ? "270deg" : "90deg" }] }]}
                                    />
                                </TouchableOpacity>
                            </HStack>
                            {touch == true ?
                                <>
                                    <Text style={styles.cTxt}>Apples are nutritious.
                                        Apples may be good for weight loss. apples may be good for your heart.
                                        As part of a healtful and varied diet.</Text>
                                </>
                                : <></>
                            }
                        </View>
                        {/* -----LINE---- */}
                        <View style={styles.line}></View>
                        <View style={{ marginTop: 20 }}>
                            <HStack style={{ alignItems: "center" }}>
                                <Text style={[styles.pName, { fontSize: 20, width: 280 }]} >Nutritions</Text>
                                <View style={styles.nut}>
                                    <Text style={styles.nText}>100gr</Text>
                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    <Image
                                        source={require("../assets/icon/backIcon.png")}
                                        style={[styles.icon, { transform: [{ rotate: "270deg" }] }]}
                                    />
                                </View>
                            </HStack>
                        </View>
                        {/* -----LINE---- */}
                        <View style={styles.line}></View>
                        <View style={{ marginTop: 20 }}>
                            <HStack style={{ alignItems: "center" }}>
                                <Text style={[styles.pName, { fontSize: 20, width: 280 }]} >Review</Text>
                                <View style={{ marginLeft: 60 }}>
                                    <Image
                                        source={require("../assets/icon/backIcon.png")}
                                        style={[styles.icon, { transform: [{ rotate: "270deg" }] }]}
                                    />
                                </View>
                            </HStack>
                        </View>
                        <View style={{ alignSelf: "center", marginTop: 20 }}>
                            <ButtonDesign
                                color={"#53B175"}
                                bttnText={"Add To Basket"}
                                navigation={undefined}
                                navigate={undefined}
                            />
                        </View>
                    </View>
                </View>
            </View>


        </NativeBaseProvider>

    )
}
export default ProductDetailPage;

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#F2F3F2",
        width: Layout.window.width,
        height: 350,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    iGround: {
        height: 250,
        width: Layout.window.width * 0.8,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
    pName: {
        fontSize: 24,
        fontWeight: "600",
        color: "#181725",

    },
    content: {
        width: Layout.window.width * 0.9,
        alignSelf: "center",
        marginTop: 10,
    },
    detail: {
        color: "#7C7C7C",
        fontSize: 16,
    },
    price: {
        fontSize: 24,
        fontWeight: "600",
        color: "#181725",
        letterSpacing: 0.5,
        marginLeft: 170
    },
    line: {
        borderBottomWidth: 2,
        marginTop: 30,
        borderColor: "#E2E2E2"
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    cTxt: {
        fontSize: 16,
        color: "#7C7C7C",
        letterSpacing: 0.5,
    },
    nut: {
        height: 20,
        width: 40,
        borderRadius: 5,
        backgroundColor: "#EBEBEB",
        justifyContent: "center",
        alignItems: "center"
    },
    nText: {
        fontSize: 10,
        color: "#7C7C7C",

    }

});
