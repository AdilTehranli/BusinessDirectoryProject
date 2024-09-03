import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header.jsx'
import Slider from '../../components/Home/Slider.jsx'
import Category from '../../components/Home/Category.jsx'
import PopularBusiness from '../../components/Home/PopularBusiness.jsx'
export default function home() {
  return (
    <ScrollView>
     <Header/>
     <Slider/>
     <Category/>
     <PopularBusiness/>
     <View style={{
      height:20
     }}>

     </View>
    </ScrollView>
  )
}