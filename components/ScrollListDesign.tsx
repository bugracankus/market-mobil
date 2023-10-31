import React, { useState } from "react";
import { StyleSheet, ScrollView, Image, View, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import Layout from "../constants/Layout";


const ScrollListDesign = () => {
  const DATA = [
    {
      id: 0,
      image: require("../assets/banner/banner1.jpg"),
    },
    {
      id: 1,
      image: require("../assets/banner/banner2.jpeg"),
    },
    {
      id: 2,
      image: require("../assets/banner/banner3.jpg"),
    },
    {
      id: 3,
      image: require("../assets/banner/banner4.jpg"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const renderDots = () => {
    return DATA.map((_, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          activeIndex === index ? styles.activeDot : styles.inactiveDot,
        ]}
      />
    ));
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setActiveIndex(pageNum);
  };

  return (
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={styles.item}
          onScroll={handleScroll}
          scrollEventThrottle={16}
         
        >
          {DATA.map((item, index) => (
            <Image key={index} alt=" " style={styles.list} source={item.image} />
          ))}
        </ScrollView>
        <View style={styles.dotContainer}>{renderDots()}</View>
      </View>
    </>
  );
};

export default ScrollListDesign;

// -- STYLES -- //
const styles = StyleSheet.create({
  item: {
    borderWidth: 0.7,
    borderColor: "#D5D5D5",
    height: Layout.window.height * 0.13,
    width: Layout.window.width * 0.9,
    borderRadius: 10,
  },
  list: {
    width: Layout.window.width * 0.9,
    height: Layout.window.height * 0.13,
    borderRadius: 10,
    resizeMode:"contain"
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: Layout.window.width*0.02,
    height: Layout.window.width*0.02,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#53B175",
  },
  inactiveDot: {
    backgroundColor: "#C7C7C7",
  },
});