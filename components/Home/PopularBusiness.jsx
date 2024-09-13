import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '@/configs/FirebaseConfig'
import PopularBusinessCard from '../Home/PopularBusinessCard'

export default function PopularBusiness() {

    const [businessList,setBusinessList] = useState([]);

    useEffect(()=>{
        GetBusinessList()
    },[])

    const GetBusinessList = async ()=>{
        setBusinessList([]);
        const q = query(collection(db,'BusinessList'),limit(10))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc)=>{
            setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
                        
        })
    }

  return (
    <View>
        <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "OutfitMedium",
          }}
        >
         Popular Business
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "OutfitMedium" }}>
          View All
        </Text>
      </View>
      <FlatList
      data={businessList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <PopularBusinessCard business={item}
        key={index}
        />
      )}
      />
    </View>
  )
}