import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "@/constants/Colors";

export default function Reviews() {
  const [rating, setRating] = useState(4);

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
    </View>
  );
}
