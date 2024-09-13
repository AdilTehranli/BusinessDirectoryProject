import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import Category from '@/components/Home/Category';

export default function explore() {
  return (
    <View
    style={{
      padding:20
    }}
    >
      <Text
      style={{
        fontSize:30,
        fontFamily:'OutfitBold'
      }}
      >Explore More</Text>
            <View style={styles.inputStyle}>
        <Feather name="search" size={24} color={Colors.PRIMARY} />
        <TextInput placeholder="Search..." />
      </View>
      <Category 
      onCategorySelect={(category)=>console.log(category)
      }
      explore={true}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  inputStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    marginTop: 15,
    borderWidth:1,
    borderColor:Colors.PRIMARY
  },
});
