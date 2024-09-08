import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Intro({ business }) {
  const router = useRouter();

  return (
    <View>
      <View
        style={{
          display: "flex",
          position: "absolute",
          zIndex: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={40} color="white" />
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={40} color="white" />
      </View>
      <Image
        source={{ uri: business.imageUrl }}
        style={{ width: "100%", height: 300 }}
      />
      <View
      style={{
        padding:20,
        backgroundColor:'#fff',
        marginTop:-20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
      }}
      >
        <Text
        style={{
          fontFamily:'OutfitBold',
          fontSize:26
        }}
        >{business.name}</Text>
        <Text
        style={{
          fontSize:17
        }}
        >{business.address}</Text>
      </View>
    </View>
  );
}
