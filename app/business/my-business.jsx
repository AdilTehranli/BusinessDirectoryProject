import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { db } from "../../configs/FirebaseConfig";
import { useNavigation } from "expo-router";

export default function MyBusiness() {
  const [businessList, setBusinessList] = useState([]);
  const [loading,setLoading] = useState(false)

  const navigation = useNavigation();



  useEffect(() => {
    GetBusinessList();

    navigation.setOptions({
      headerShown:true,
      headerTitle: "My Business"
    })
  }, []);

  const GetBusinessList = async () => {
    setLoading(true)
    setBusinessList([]);
    const q = query(collection(db, "BusinessList"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])

      // console.log(doc.data());
    });
    setLoading(false)
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
  refreshing={loading}
  onRefresh={GetBusinessList}
  renderItem={({ item, index }) => (
    <BusinessListCard business={item} key={index} />
  )}
/>
    </View>
  );
}
