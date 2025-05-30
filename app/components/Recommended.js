import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Recommended({ mainText, image1, image2 }) {
  const arrow = require("../../assets/images/arrow.png");

  return (
    <View>
      <View style={[styles.horizontal]}>
        <Text style={styles.text}>{mainText}</Text>
        <Image source={arrow} style={[styles.imageArrow, styles.more]} />
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ImageBackground
          source={image1}
          imageStyle={{ borderRadius: 20 }}
          style={[styles.image, styles.imageMarginRight]}
        />
        <ImageBackground
          source={image2}
          imageStyle={{ borderRadius: 20 }}
          style={[styles.image, styles.imageMarginRight]}
        />
        <ImageBackground
          source={image1}
          imageStyle={{ borderRadius: 20 }}
          style={[styles.image, styles.imageMarginRight]}
        />
        <ImageBackground
          source={image2}
          imageStyle={{ borderRadius: 20 }}
          style={[styles.image, styles.imageMarginRight]}
        />
        <ImageBackground
          source={image1}
          imageStyle={{ borderRadius: 20 }}
          style={styles.image}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "Montserrat-SemiBold",
    color: "#3B3B3B",
  },
  image: {
    width: 173,
    height: 136,
    backgroundColor: "black",
    borderRadius: 22,
  },
  horizontal: {
    flexDirection: "row",
  },
  imageMarginRight: {
    marginRight: 10,
  },
  more: {
    position: "absolute",
    left: 338,
    top: 10,
  },
  imageArrow: {
    height: 10,
    width: 10,
  },
  borderRadius: {
    borderRadius: 20,
  },
});
