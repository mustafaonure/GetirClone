import { View, ScrollView } from "react-native";
import React from "react";

import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";
import CategoryItem from "../../components/CategoryItem";
import MainCategory from "../../components/MainCategory";

const HomeScreen = () => {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ height: "100%", backgroundColor: "#f5f5f5" }}
    >
      <HeaderMain />
      <BannerCarousel />
      <MainCategory />
    </ScrollView>
  );
};

export default HomeScreen;
