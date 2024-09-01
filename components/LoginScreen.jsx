import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Login from "../assets/images/login.png";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { use0Auth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startAuthFlow } = use0Auth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or Sign Up for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View>
      <View>
        <Image source={Login} style={styles.image} />
      </View>
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "OutfitBold",
            textAlign: "center",
          }}
        >
          Your Ultimate{" "}
          <Text style={{ color: Colors.PRIMARY }}>
            Community Business Directory
          </Text>{" "}
          App
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            marginVertical: 10,
            color: Colors.GRAY,
          }}
        >
          Find your favorite business near your and post your own business to
          you community{" "}
        </Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            Let's start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: "#fff",
    padding: 20,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 99,
    marginTop: 20,
  },
  image: {
    width: 250,
    height: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft: 80,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
});
