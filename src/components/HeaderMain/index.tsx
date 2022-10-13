import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={require("../../../assets/house.png")}
        />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Ev</Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              color: "#6E7480",
              marginLeft: 6,
              marginRight: 1,
            }}
          >
            Akıncılar Mahallesi Çizmeci Sokak...
          </Text>
          <Entypo name="chevron-right" size={22} color="#5D3EBD" />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#5D3EBD" }}>
            TVS
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#5D3EBD" }}>
            13<Text style={{ fontSize: 16 }}>dk</Text>
          </Text>
        </View>
      </View>

      <View></View>
    </View>
  );
};

export default index;
