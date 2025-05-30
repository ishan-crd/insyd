import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { ImageBackground, StatusBar, StyleSheet, View } from "react-native";
import Recommended from "./components/Recommended";
import SearchBar from "./components/SearchBar";
import TopBar from "./components/TopBar";

SplashScreen.preventAutoHideAsync();

const restImage = require("../assets/images/restaurant.png");
const club1 = require("../assets/images/club1.png");
const club2 = require("../assets/images/club2.png");
const club3 = require("../assets/images/club3.png");

export default function Index() {
  const [fontsLoaded] = useFonts({
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-ExtraLight": require("../assets/fonts/Montserrat-ExtraLight.ttf"),
    "Montserrat-Light": require("../assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <View style={styles.view}>
        <TopBar />
      </View>
      <View style={[styles.view, styles.viewTwo]}>
        <SearchBar />
      </View>
      <ImageBackground source={restImage} style={[styles.topBox]} />
      <View style={[styles.view, styles.recommended]}>
        <Recommended
          image1={club1}
          image2={club2}
          mainText="Recommended Clubs"
        />
      </View>
      <View style={[styles.view, styles.recommended, styles.lessMargin]}>
        <Recommended
          image1={club3}
          image2={club1}
          mainText="Parties In Your Area"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginTop: 52,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  viewTwo: {
    marginTop: 20,
    justifyContent: "space-around",
  },
  topBox: {
    height: 145,
    width: 364,
    borderRadius: 22,
    alignSelf: "center",
    top: 25,
  },
  recommended: {
    height: 175,
  },
  lessMargin: {
    marginTop: 25,
  },
});
