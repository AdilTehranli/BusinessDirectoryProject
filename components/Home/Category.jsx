import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import CategoryItem from "../Home/CategoryItem";
import { useRouter } from "expo-router";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };

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
          Category
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "OutfitMedium" }}>
          View All
        </Text>
      </View>
      <FlatList
        horizontal={true}
        data={categoryList}
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 20 }}
        renderItem={({ item, index }) => (
          <CategoryItem category={item} key={index} onCategoryPress={(category)=>router.push('businesslist/'+item.name)}/>
        )}
      />
    </View>
  );
}
