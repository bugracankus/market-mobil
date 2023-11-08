import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, } from "react-native";
import Layout from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { HStack, NativeBaseProvider, VStack } from "native-base";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtomBarName from "../components/ButtomBarName";
import NavigationBar from "../components/NavigationBar";
import ProductDesign from "../components/ProductDesign";

const ProductDiscovered: React.FC = () => {
    const navigation: any = useNavigation();
    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <ButtomBarName title={"Beverages"} />
                <ScrollView>
                    <VStack space={6} style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                        <HStack space={6}>
                            <ProductDesign
                                productImage={require("../assets/products/product13.png")}
                                productName={"Diet Coke"}
                                productInfo={"355ml, Price"}
                                productPrice={"$1.99"}
                                navigation={navigation}
                                navigate={"ProductDetailPage"}
                            />
                            <ProductDesign
                                productImage={require("../assets/products/product14.png")}
                                productName={"Sprite Can"}
                                productInfo={"325ml, Price"}
                                productPrice={"$1.99"}
                                navigation={navigation}
                                navigate={"ProductDetailPage"}
                            />
                        </HStack>
                        <HStack space={6}>
                            <ProductDesign
                                productImage={require("../assets/products/product12.png")}
                                productName={"Apple Juice"}
                                productInfo={"750ml, Price"}
                                productPrice={"$2.99"}
                                navigation={navigation}
                                navigate={"ProductDetailPage"}
                            />
                            <ProductDesign
                                productImage={require("../assets/products/product11.png")}
                                productName={"Orenge Juice"}
                                productInfo={"750ml, Priceg"}
                                productPrice={"$3.99"}
                                navigation={navigation}
                                navigate={"ProductDetailPage"}
                            />
                        </HStack>
                        <HStack space={6} style={{ marginBottom: 50 }}>
                            <ProductDesign
                                productImage={require("../assets/products/product15.png")}
                                productName={"Coca Cola Can"}
                                productInfo={"325ml, Priceg"}
                                productPrice={"$1.99"}
                                navigation={navigation}
                                navigate={"ProductDetailPage"}
                            />
                            <ProductDesign
                                productImage={require("../assets/products/product16.png")}
                                productName={"Pepsi Can"}
                                productInfo={"325ml, Priceg"}
                                productPrice={"$1.99"}
                                navigation={navigation}
                                navigate={"ProductDetailPage"}
                            />
                        </HStack>
                    </VStack>
                </ScrollView>
            </View>
            <NavigationBar />
        </NativeBaseProvider>
    )
}
export default ProductDiscovered;

const styles = StyleSheet.create({


});
