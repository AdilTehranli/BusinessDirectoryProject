import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { db } from "../../configs/FirebaseConfig";

export default function MyBusiness() {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    GetBusinessList();
  }, []);

  const GetBusinessList = async () => {
    setBusinessList([]);
    const q = query(collection(db, "BusinessList"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])

      // console.log(doc.data());
    });
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
        My Business
      </Text>

    <FlatList
  data={businessList}
  renderItem={({ item, index }) => (
    <BusinessListCard business={item} key={index} />
  )}
/>
    </View>
  );
}
