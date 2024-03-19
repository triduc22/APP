import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import app from "./../../assets/images/app.png";
import Colors from "../../assets/Shared/Colors";

export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={app} style={styles.appImage} />
      <View
        style={{
          backgroundColor: Colors.white,
          padding: 25,
          alignItems: "center",
          marginTop: -50,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // elevation: 2
        }}
      >
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Book Appointment Effortlessly and manager your health journey
        </Text>
        <TouchableOpacity
            onPress={()=> console.log('Clicked')}
          style={{
            padding: 16,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 90,
            alignItems: "center",
            marginTop: 20,
            width: Dimensions.get("screen").width * 0.8,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: Colors.white,
            }}
          >
            {" "}
            Login With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appImage: {
    width: 300,
    height: 500,
    objectFit: "cover",
    marginTop: 50,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "#000",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
