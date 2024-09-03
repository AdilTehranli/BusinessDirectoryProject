import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import star from "../../assets/images/star.png";
export default function PopularBusinessCard({ business }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 10,
        marginLeft: 20,
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: business?.imageUrl }}
        style={{ width: 200, height: 130, borderRadius: 15 }}
      />
      <View style={{ marginTop: 17, gap: 3 }}>
        <Text style={{ fontFamily: "OutfitBold", fontSize: 17 }}>
          {business.name}
        </Text>
        <Text style={{ color: Colors.GRAY, fontSize: 13 }}>
          {business.address}
        </Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Image
              source={require("../../assets/images/star.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text style={{ fontFamily: "OutfitMedium" }}>4.5</Text>
          </View>
          <Text
          style={{fontFamily:'OutfitMedium',
            fontSize:11,
            backgroundColor:Colors.PRIMARY,
            padding:3,
            borderRadius:7,
            color:'#fff'
          }}
          >{business.category}</Text>
        </View>
      </View>
    </View>
  );
}
