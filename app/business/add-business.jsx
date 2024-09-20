import { View, Text, Image, TextInput, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from "react-native-picker-select";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../configs/FirebaseConfig";

export default function AddBusiness() {
  const navigation = useNavigation();
  const [image, setImage] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [name, setName] = useState();
  const [address, setAdress] = useState();
  const [contact, setContact] = useState();
  const [website, setWebsite] = useState();
  const [about, setAbout] = useState();
  const [category, setCategory] = useState();
  // const [loading,setLoading] = useSt(false)

  useEffect(() => {
    navigation.setOptions({
      title: "Add New Business",
      headerShown: true,
    });
    GetCategoryList();
  }, []);

  const onImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    setImage(result?.assets[0].uri);
    console.log(result);
  };

  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      console.log(doc.data());
      setCategoryList((prev) => [
        ...prev,
        {
          label: doc.data().name,
          value: doc.data().name,
        },
      ]);
    });
  };

  const onAddNewBusiness = async () => {
    const filename = Date.now().toString() + ".jpg";
    const resp = await fetch(image);
    const blob = await resp.blob();

    const imageRef = ref(storage, "business-app/" + filename);

    uploadBytes(imageRef, blob)
      .then((snapshot) => {
        console.log("File uploaded successfully...");
      })
      .then((resp) => {
        getDownloadURL(imageRef).then(async (downloadUrl) => {
          console.log(downloadUrl);
          saveBusinessDetail(downloadUrl)
        });
      });
  };

  const saveBusinessDetail = async (imageUrl) =>{
    await setDoc(doc(db,'BusinessList',Date.now().toString()),{
      name: name,
      address: address,
      category: category,
      about:about,
      contact:contact,
      imageUrl:imageUrl,
      website:website
    })

    ToastAndroid.show('New business added...',ToastAndroid.LONG)
  }

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "OutfitBold",
        }}
      >
        Add New Business
      </Text>
      <Text
        style={{
          color: Colors.GRAY,
        }}
      >
        Fill all details in order to add new business
      </Text>

      <TouchableOpacity
        style={{
          marginTop: 20,
        }}
        onPress={() => onImagePick()}
      >
        {!image ? (
          <Image
            source={require("../../assets/images/placeholder.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 15,
            }}
          />
        ) : (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 15,
            }}
          />
        )}
      </TouchableOpacity>

      <View>
        <TextInput
          onChangeText={(v) => setName(v)}
          placeholder="Name"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 17,
            backgroundColor: "#fff",
            marginTop: 10,
            borderColor: Colors.PRIMARY,
          }}
        />
        <TextInput
          onChangeText={(v) => setAdress(v)}
          placeholder="Adress"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 17,
            backgroundColor: "#fff",
            marginTop: 10,
            borderColor: Colors.PRIMARY,
          }}
        />
        <TextInput
          onChangeText={(v) => setContact(v)}
          placeholder="Contact"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 17,
            backgroundColor: "#fff",
            marginTop: 10,
            borderColor: Colors.PRIMARY,
          }}
        />
        <TextInput
          onChangeText={(v) => setWebsite(v)}
          placeholder="Website"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 17,
            backgroundColor: "#fff",
            marginTop: 10,
            borderColor: Colors.PRIMARY,
          }}
        />
        <TextInput
          onChangeText={(v) => setAbout(v)}
          multiline
          numberOfLines={5}
          placeholder="About"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 17,
            backgroundColor: "#fff",
            marginTop: 10,
            height: 100,
            borderColor: Colors.PRIMARY,
          }}
        />
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "#fff",
            marginTop: 10,
            borderColor: Colors.PRIMARY,
          }}
        >
          <RNPickerSelect
            onValueChange={(value) => setCategory(value)}
            items={categoryList}
          />
        </View>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            marginTop: 10,
            borderRadius: 5,
          }}
          onPress={() => onAddNewBusiness()}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontFamily: "OutfitMedium",
            }}
          >
            Add New Business
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
