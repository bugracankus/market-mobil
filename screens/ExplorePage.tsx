import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, } from "react-native";
import Layout from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { HStack, NativeBaseProvider, VStack } from "native-base";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtomBarName from "../components/ButtomBarName";
import SearchBarDesign from "../components/SearchBarDesign";
import Product2Design from "../components/Product2Design";
import NavigationBar from "../components/NavigationBar";




const ExplorePage: React.FC = () => {
    const navigation: any = useNavigation();
    return (

        <NativeBaseProvider>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <ButtomBarName title={"Find Products"} />
                <ScrollView>
                    <View style={{ marginTop: 30 }}>
                        <SearchBarDesign />
                        <VStack space={6} style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                            <HStack space={6}>
                                <Product2Design
                                    backgroundColor={"rgba(83, 177, 117, 0.10)"}
                                    borderColor={"rgba(83, 177, 117, 0.70)"}
                                    productImage={require("../assets/products/product10.png")}
                                    prodcutName={"Frash Fruits & Vegetable"}
                                />
                                <Product2Design
                                    backgroundColor={"rgba(248, 164, 76, 0.10)"}
                                    borderColor={"rgba(248, 164, 76, 0.70)"}
                                    productImage={require("../assets/products/product5.png")}
                                    prodcutName={"Cooking Oil & Ghee"}
                                />
                            </HStack>
                            <HStack space={6}>
                                <Product2Design
                                    backgroundColor={"rgba(247, 165, 147, 0.25)"}
                                    borderColor={"#F7A593"}
                                    productImage={require("../assets/products/product9.png")}
                                    prodcutName={"Meat & Fish"}
                                />
                                <Product2Design
                                    backgroundColor={"rgba(211, 176, 224, 0.25)"}
                                    borderColor={"#D3B0E0"}
                                    productImage={require("../assets/products/product8.png")}
                                    prodcutName={"Bakery & Snacks"}
                                />
                            </HStack>
                            <HStack space={6} style={{ marginBottom: 50 }}>
                                <Product2Design
                                    backgroundColor={"rgba(253, 229, 152, 0.25)"}
                                    borderColor={"#FDE598"}
                                    productImage={require("../assets/products/product6.png")}
                                    prodcutName={"Dairy & Eggs"}
                                />
                                <Product2Design
                                    backgroundColor={"rgba(211, 176, 224, 0.25)"}
                                    borderColor={"#D3B0E0"}
                                    productImage={require("../assets/products/product7.png")}
                                    prodcutName={"Beverages"}
                                />
                            </HStack>
                        </VStack>
                    </View>
                </ScrollView>

            </View>
            <NavigationBar />
        </NativeBaseProvider>
    )
}
export default ExplorePage;

const styles = StyleSheet.create({


});
