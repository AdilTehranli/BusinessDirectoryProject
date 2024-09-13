import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Category from "@/components/Home/Category";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import ExploreBusinessList from '../../components/Explore/ExploreBusinessList'

export default function explore() {

  const [businessList,setBusinessList] = useState([])

  const GetBusinessByCategory = async (category) => {
    setBusinessList([]);
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      console.log(doc.data());
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
  };
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "OutfitBold",
        }}
      >
        Explore More
      </Text>
      <View style={styles.inputStyle}>
        <Feather name="search" size={24} color={Colors.PRIMARY} />
        <TextInput placeholder="Search..." />
      </View>
      <Category
        onCategorySelect={(category) => GetBusinessByCategory(category)}
        explore={true}
      />
      <ExploreBusinessList 
      businessList={businessList}
      />
    </View>
  );
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
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
});
