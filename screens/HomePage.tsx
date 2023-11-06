import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import Layout from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { HStack, NativeBaseProvider, VStack } from "native-base";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import SearchBarDesign from "../components/SearchBarDesign";
import ScrollListDesign from "../components/ScrollListDesign";
import ProductDesign from "../components/ProductDesign";
import NavigationBar from "../components/NavigationBar";


const HomePage: React.FC = () => {
    const navigation: any = useNavigation();
    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <ScrollView>
                    <View style={styles.lGround}>
                        <Image
                            source={require("../assets/icon/logoColor.png")}
                            style={styles.logo}
                            alt=""
                        />
                        <HStack space={1} style={{ marginTop: 5 }}>
                            <Image
                                source={require("../assets/icon/locationLogo.png")}
                                style={styles.lLogo}
                            />
                            <Text style={styles.lText}>Izmir-Türkiye</Text>
                        </HStack>
                    </View>
                    <SearchBarDesign />
                    <View style={{ marginTop: 20 }}>
                        <ScrollListDesign />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.tText}>Exclusive Offer</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            style={styles.scrolList}
                        >
                            <HStack space={7}>
                                <ProductDesign
                                    productImage={require("../assets/products/product3.png")}
                                    productName={"Organic Bananas"}
                                    productInfo={"7pcs, Priceg"}
                                    productPrice={"$4.99"} 
                                    navigation={navigation} 
                                    navigate={"ProductDetailPage"}                                
                                    />
                                <ProductDesign
                                    productImage={require("../assets/products/product2.png")}
                                    productName={"Red Apple"}
                                    productInfo={"1Kg, Priceg"}
                                    productPrice={"$14.99"}
                                    navigation={navigation} 
                                    navigate={"ProductDetailPage"}        
                                />
                                <ProductDesign
                                    productImage={require("../assets/products/product2.png")}
                                    productName={"Red Apple"}
                                    productInfo={"1Kg, Priceg"}
                                    productPrice={"$14.99"}
                                    navigation={navigation} 
                                    navigate={"ProductDetailPage"}        
                                />
                                <ProductDesign
                                    productImage={require("../assets/products/product2.png")}
                                    productName={"Red Apple"}
                                    productInfo={"1Kg, Priceg"}
                                    productPrice={"$14.99"}
                                    navigation={navigation} 
                                    navigate={"ProductDetailPage"}        
                                />
                            </HStack>
                        </ScrollView>
                        <Text style={styles.tText}>Best Selling</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            style={styles.scrolList}
                        >
                            <HStack space={7}>
                                <ProductDesign
                                    productImage={require("../assets/products/product3.png")}
                                    productName={"Organic Bananas"}
                                    productInfo={"7pcs, Priceg"}
                                    productPrice={"$4.99"}
                                    navigation={navigation} 
                                    navigate={"ProductDetailPage"}        
                                />
                                <ProductDesign
                                    productImage={require("../assets/products/product2.png")}
                                    productName={"Red Apple"}
                                    productInfo={"1Kg, Priceg"}
                                    productPrice={"$14.99"}
                                    navigation={navigation} 
                                    navigate={"ProductDetailPage"}        
                                />
                                <ProductDesign
                                    productImage={require("../assets/products/product2.png")}
                                    productName={"Red Apple"}
                                    productInfo={"1Kg, Priceg"}
                                    productPrice={"$14.99"}
                                    navigation={navigation} 
                                    navigate={"ProductDetailPage"}        
                                />
                                <ProductDesign
                                    productImage={require("../assets/products/product2.png")}
                                    productName={"Red Apple"}
                                    productInfo={"1Kg, Priceg"}
                                    productPrice={"$14.99"}
                                    navigation={navigation} 
                                    navigate={"ProductDetailPage"}        
                                />
                            </HStack>
                        </ScrollView>
                        <View style={{marginBottom:40}}>
                            <Text style={styles.tText}>Groceries</Text>
                            {/* // ! Pulses add ! */}
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled={true}
                                style={styles.scrolList}
                            >
                                <HStack space={7}>
                                    <ProductDesign
                                        productImage={require("../assets/products/product3.png")}
                                        productName={"Organic Bananas"}
                                        productInfo={"7pcs, Priceg"}
                                        productPrice={"$4.99"}
                                        navigation={navigation} 
                                        navigate={"ProductDetailPage"}        
                                    />
                                    <ProductDesign
                                        productImage={require("../assets/products/product2.png")}
                                        productName={"Red Apple"}
                                        productInfo={"1Kg, Priceg"}
                                        productPrice={"$14.99"}
                                        navigation={navigation} 
                                        navigate={"ProductDetailPage"}        
                                    />
                                    <ProductDesign
                                        productImage={require("../assets/products/product2.png")}
                                        productName={"Red Apple"}
                                        productInfo={"1Kg, Priceg"}
                                        productPrice={"$14.99"}
                                        navigation={navigation} 
                                        navigate={"ProductDetailPage"}        
                                    />
                                    <ProductDesign
                                        productImage={require("../assets/products/product2.png")}
                                        productName={"Red Apple"}
                                        productInfo={"1Kg, Priceg"}
                                        productPrice={"$14.99"}
                                        navigation={navigation} 
                                        navigate={"ProductDetailPage"}        
                                    />
                                </HStack>
                            </ScrollView>
                        </View>

                    </View>
                </ScrollView>
                {/* //----NavigationBar---// */}
                <NavigationBar />
            </View>
        </NativeBaseProvider>
    )
}
export default HomePage;

const styles = StyleSheet.create({
    lGround: {
        height: 80,
        width: Layout.window.width * 0.6,
        marginTop: 50,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    logo: {
        width: 35,
        height: 35,
        resizeMode: "contain"
    },
    lLogo: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    lText: {
        fontSize: 17,
    },
    content: {
        width: Layout.window.width * 0.9,
        alignSelf: "center",
    },
    tText: {
        fontSize: 24,
        color: "#181725",
        fontWeight: "500",
        letterSpacing: 0.5,
        marginTop: 20,
        
    },
    scrolList: {
        width: Layout.window.width * 0.9,
        height: 250,
        marginTop:10
    },
});
