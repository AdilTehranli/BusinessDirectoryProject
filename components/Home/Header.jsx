import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import React from "react";
import profile from "../../assets/images/profile.png";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";

export default function Header() {
  return (
    <View
    style={{ padding: 20, paddingTop: 40, backgroundColor: Colors.PRIMARY,
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20
     }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View>
          <Image
            source={profile}
            style={{ width: 50, height: 50, borderRadius: 99 }}
          />
        </View>
        <View>
          <Text style={{ color: "#fff" }}>Welcome!</Text>
          <Text
            style={{ fontSize: 19, fontFamily: "OutfitMedium", color: "#fff" }}
          >
            Adil Tehranli
          </Text>
        </View>
      </View>
      <View style={styles.inputStyle}>
        <Feather name="search" size={24} color={Colors.PRIMARY} />
        <TextInput placeholder="Search..." />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    marginTop: 15,
  },
});
