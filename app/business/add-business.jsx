import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function AddBusiness() {

  const navigation = useNavigation()

  useEffect(()=>{
      navigation.setOptions({
        title: 'Add New Business',
        headerShown:true
      })
  },[])

  return (
    <View>
      <Text>AddBusiness</Text>
    </View>
  )
}