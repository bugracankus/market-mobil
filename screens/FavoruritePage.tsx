import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HStack, NativeBaseProvider, VStack } from "native-base";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtomBarName from "../components/ButtomBarName";
import NavigationBar from "../components/NavigationBar";
import ProductCartDesign from "../components/ProductCartDesign";
import Layout from "../constants/Layout";
import FavCartDesing from "../components/FavCartDesing";

const FavoruritePage: React.FC = () => {
    const navigation: any = useNavigation();
    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <ButtomBarName title={"Favorurite"} />
                <View style={styles.line}></View>
                <ScrollView>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                        <VStack space={2}>
                            <FavCartDesing
                                productImage={require("../assets/products/product14.png")}
                                productName={"Sprite Can"}
                                productInfo={"325 Ml, Price"}
                                prodcutPrice={"$1.99"} />
                            <FavCartDesing
                                productImage={require("../assets/products/product15.png")}
                                productName={"Sprite Can"}
                                productInfo={"325 Ml, Price"}
                                prodcutPrice={"$1.99"} />
                            <FavCartDesing
                                productImage={require("../assets/products/product12.png")}
                                productName={"Sprite Can"}
                                productInfo={"325 Ml, Price"}
                                prodcutPrice={"$1.99"} />
                            <FavCartDesing
                                productImage={require("../assets/products/product15.png")}
                                productName={"Sprite Can"}
                                productInfo={"325 Ml, Price"}
                                prodcutPrice={"$1.99"} />
                            <FavCartDesing
                                productImage={require("../assets/products/product11.png")}
                                productName={"Sprite Can"}
                                productInfo={"325 Ml, Price"}
                                prodcutPrice={"$1.99"} />
                            <FavCartDesing
                                productImage={require("../assets/products/product13.png")}
                                productName={"Sprite Can"}
                                productInfo={"325 Ml, Price"}
                                prodcutPrice={"$1.99"} />
                        </VStack>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.bttn}>
                            <HStack style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.bText}>Go to Checkout</Text>
                            </HStack>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <NavigationBar />
        </NativeBaseProvider>
    )
}
export default FavoruritePage;

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        marginTop: 25,
        color: "#E2E2E2",
        opacity: 0.2
    },
    bttn: {
        height: 60,
        width: Layout.window.width * 0.8,
        borderRadius: 19,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#53B175",
        alignSelf: "center",
        marginTop: 25,
        marginBottom: 50,
    },
    bText: {
        fontSize: 20,
        color: "white"
    },
    tGround: {
        height: 20,
        width: 50,
        borderRadius: 5,
        backgroundColor: "#489E67",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30
    },
    pText: {
        fontSize: 12,
        color: "white"
    }
});
