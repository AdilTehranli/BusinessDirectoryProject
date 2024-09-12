import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "@/constants/Colors";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
// import { useUser } from '@clerk/clerk-react'

export default function Reviews({ business }) {
  const [rating, setRating] = useState(4);
  const [userInput, setUserInput] = useState();
  // const { user } = useUser();

  const onSubmit = async () => {
    const docRef = doc(db, "BusinessList", business.id);
    await updateDoc(docRef,{
      reviews: arrayUnion({
        rating: rating,
        comment: userInput,
        // userName: user?.fullName,
        // userImage: user?.imageUrl,
      }),
    });

    ToastAndroid.show("Comment added succsesfuly", ToastAndroid.BOTTOM);
  };

  return (
    <View
    
      style={{
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "OutfitBold",
        }}
      >
        Reviews
      </Text>

      <View>
        <Rating
          showRating={false}
          startingValue={(rating) => setRating(rating)}
          imageSize={20}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          numberOfLines={4}
          onChangeText={(value) => setUserInput(value)}
          style={{
            padding: 10,
            borderColor: Colors.GRAY,
            borderWidth: 1,
            borderRadius: 6,
            textAlignVertical: "top",
          }}
          placeholder="Write your comment"
        />
        <TouchableOpacity
          disabled={!userInput}
          onPress={() => onSubmit()}
          style={{
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              backgroundColor: Colors.PRIMARY,
              marginTop: 10,
              color: "#fff",
              padding: 7,
              borderRadius: 6,
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {business?.reviews?.map((item,index)=>(
          <View>
            <Text>{item.comment}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
