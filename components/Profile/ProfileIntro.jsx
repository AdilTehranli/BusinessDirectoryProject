import { View, Text, Image } from "react-native";
import React from "react";
import profile from "../../assets/images/profile.png";

export default function ProfileIntro() {
  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    }}>
      <Image
        source={profile}
        style={{ width: 100, height: 100, borderRadius: 99 }}
      />
      <Text style={{
        fontFamily:'OutfitBold',
        fontSize:20
      }}>Adil Tehranli</Text>
      <Text
      
      >adilltehranli@gmail.com</Text>
    </View>
  );
}
