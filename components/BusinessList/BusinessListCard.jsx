import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function BusinessListCard({ business }) {
  return (
    <View
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        display:'flex',
        flexDirection: 'row',
        gap:5,
      }}
    >
      <Image
        source={{ uri: business.imageUrl }}
        style={{ width: 120, height: 120, borderRadius: 15 }}
      />
      <View style={{
        gap:7
      }}>
        <Text style={{
            fontSize: 18,
            fontFamily:'OutfitBold'
        }}> {business.name}</Text>
        <Text style={{
            fontSize: 15,
            color:Colors.GRAY
        }}> {business.address}</Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Image
              source={require("../../assets/images/star.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text style={{ fontFamily: "OutfitMedium" }}>4.5</Text>
          </View>
      </View>
    </View>
  );
}
