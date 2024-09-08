import { View, Text, FlatList, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";

export default function ActionButton({ business }) {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("../../assets/images/call.png"),
      url: 'tel:' + business.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("../../assets/images/pin.png"),
      url: "https://maps.app.goo.gl/W8vsr4gXSHSNCyEk6",
    },
    {
      id: 3,
      name: "Web",
      icon: require("../../assets/images/web.png"),
      url: business?.website,
    },
    {
      id: 4,
      name: "Share",
      icon: require("../../assets/images/share.png"),
    },
  ];

  const OnPressHandler =(item)=>{

    if(item.name == 'share'){
      return;
    }
    Linking.openURL(item.url)
  }

  return (
    <View
    style={{
      backgroundColor:'#fff'
    }}
    >
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{justifyContent:'space-between'}}
        renderItem={({ item, index }) => (
          <TouchableOpacity 

          onPress={()=>OnPressHandler(item)}
          style={{
            padding:20
          }}
          key={index}>
            <Image source={item?.icon}
            style={{
                width:50,
                height:50,
            }}
             />
             <Text
             style={{
                fontFamily:'OutfitMedium',
                marginTop:10,
                textAlign:'center'
             }}
             >{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
