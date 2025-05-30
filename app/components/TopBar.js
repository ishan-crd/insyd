import { Image, StyleSheet } from "react-native";

export default function TopBar() {
  const logoImg = require("../../assets/images/insyd-logo.png");
  const hamburger = require("../../assets/images/hamburger.png");
  return (
    <>
      <Image source={logoImg} style={styles.logo} />
      <Image source={hamburger} style={styles.image} />
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    backgroundColor: "blue",
  },
  logo: {
    width: 90,
    height: 40,
  },
  image: {
    width: 30,
    height: 20,
  },
});
