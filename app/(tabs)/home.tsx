import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header.jsx'
import Slider from '../../components/Home/Slider.jsx'
import Category from '../../components/Home/Category.jsx'
import PopularBusiness from '../../components/Home/PopularBusiness.jsx'
export default function home() {
  return (
    <View>
     <Header/>
     <Slider/>
     <Category/>
     <PopularBusiness/>
    </View>
  )
}