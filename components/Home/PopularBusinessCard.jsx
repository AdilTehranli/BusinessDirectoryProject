import { View, Text, Image } from 'react-native'
import React from 'react'

export default function PopularBusinessCard({business}) {
  return (
    <View>
      <Image source={{uri:business?.imageUrl}}
        style={{width:200,height:130}}
      />
    </View>
  )
}