import { View, Text } from 'react-native'
import React from 'react'
import ProfileIntro from '../../components/Profile/ProfileIntro'

export default function profile() {
  return (
    <View
    style={{
      padding:20
    }}
    >
      <Text
      style={{
        fontFamily:'OutfitBold',
        fontSize: 25,
      }}
      >Profile</Text>
      <ProfileIntro/>
    </View>
  )
}