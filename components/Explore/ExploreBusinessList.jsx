import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import BusinessListCard from '../Explore/BusinessListCard'

export default function ExploreBusinessList({ businessList }) {
  return (
    <ScrollView>
      <FlatList
        data={businessList}
        renderItem={({ item, index }) => 
        <View >
            <BusinessListCard business={item} key={index}/>
        </View>}
      />
      <View style={{
        height:100
      }}>

      </View>
    </ScrollView>
  );
}
