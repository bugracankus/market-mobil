import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HStack, NativeBaseProvider, VStack } from "native-base";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtomBarName from "../components/ButtomBarName";
import NavigationBar from "../components/NavigationBar";
import Layout from "../constants/Layout";
import FavCartDesing from "../components/FavCartDesing";
import AccountBarDesign from "../components/AccountBarDesign";

const AccountPage: React.FC = () => {
    const navigation: any = useNavigation();
    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={styles.aGround}>
                    <HStack>
                        <Image
                            source={require("../assets/users/users.jpg")}
                            style={styles.users}
                            alt=""
                        />
                        <VStack style={{ justifyContent: "center" }}>
                            <Text style={styles.aText}>Buğra Can Kuş</Text>
                            <Text style={styles.aMail}>bugracan_kus@hotmail.com</Text>
                        </VStack>
                    </HStack>
                </View>
                <ScrollView>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                        <VStack space={4}>
                            <AccountBarDesign icon={require("../assets/icon/AccountIcon/OrdersIcon.png")} name={"Orders"} />
                            <AccountBarDesign icon={require("../assets/icon/AccountIcon/MyDetailsicon.png")} name={"My Details"} />
                            <AccountBarDesign icon={require("../assets/icon/AccountIcon/DeliveryAddress.png")} name={"Delivery Address"} />
                            <AccountBarDesign icon={require("../assets/icon/AccountIcon/Vectoricon.png")} name={"Payment Methods"} />
                            <AccountBarDesign icon={require("../assets/icon/AccountIcon/PromoCordicon.png")} name={"Promo Card"} />
                            <AccountBarDesign icon={require("../assets/icon/AccountIcon/Bellicon.png")} name={"Notifecations "} />
                            <AccountBarDesign icon={require("../assets/icon/AccountIcon/helpicon.png")} name={"Help "} />
                            <AccountBarDesign icon={require("../assets/icon/AccountIcon/abouticon.png")} name={"About "} />
                        </VStack>
                    </View>
                     <TouchableOpacity>
                        <View style={styles.bttn}>
                            <HStack style={{ justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={require("../assets/icon/logOutcon.png")}
                                    style={{marginRight:55}}
                                />
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
export default AccountPage;

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        marginTop: 25,
        color: "#E2E2E2",
        opacity: 0.2
    },
    aGround: {
        height: 100,
        width: Layout.window.width,
        marginTop: 50,

    },
    users: {
        width: 90,
        height: 90,
        borderRadius: 100,
        resizeMode: "contain",
        marginLeft: 10,
        alignSelf: "center"
    },
    bttn: {
        height: 60,
        width: Layout.window.width * 0.8,
        borderRadius: 19,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F3F2",
        alignSelf: "center",
        marginTop: 25,
        marginBottom: 50,
    },
    bText: {
        fontSize: 20,
        color: "#53B175",
        marginRight:80
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
    },
    aText: {
        fontSize: 20,
        color: "#181725",
        fontWeight: "700",
        letterSpacing: 0.5
    },
    aMail: {
        fontSize: 14,
        color: "#7C7C7C",
    }
});
