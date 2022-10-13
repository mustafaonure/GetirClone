import { FlatList, Image, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
const { width, height } = Dimensions.get("window");

const index = () => {
  const bannerArray = [
    {
      id: 1,
      source: require("../../../assets//banner1.jpeg"),
    },
    {
      id: 2,
      source: require("../../../assets/banner2.jpeg"),
    },
    {
      id: 3,
      source: require("../../../assets//banner3.jpeg"),
    },
    {
      id: 4,
      source: require("../../../assets//banner4.jpeg"),
    },
  ];
  const [banners, setBanners] = useState([
    "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
    "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
    "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
    "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg",
  ]);
  return (
    <FlatList
      data={banners}
      renderItem={(item) => (
        <Image
          source={{ uri: item.item }}
          style={{
            width: width,
            height: height * 0.24,
            resizeMode: "stretch",
          }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
    />
  );
};

export default index;
