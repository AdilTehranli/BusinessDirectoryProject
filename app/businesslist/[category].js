import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { Colors } from "@/constants/Colors";


export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

  const [businessList, setBusinessList] = useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
    getBusinessList();
  }, []);

  const getBusinessList = async () => {
    setLoading(true)
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, doc.data()]);
    });
    setLoading(false)
  };

  return (
    <View>
      {businessList?.length > 0 && loading == false ? (
        <FlatList
          refreshing={loading}
          onRefresh={getBusinessList}
          data={businessList}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
          
        />
      ) :
      loading ? <ActivityIndicator
      style={{
        marginTop:'60%'
      }}
      size={'large'}
      color={Colors.PRIMARY}

      />:
      (
        <Text style={{
            fontSize: 20,
            textAlign: 'center',
            marginTop:'50%',
            color:Colors.GRAY,
            fontFamily:'OutfitBold'
        }}>Nothing Product</Text>
      )}
    </View>
  );
}
