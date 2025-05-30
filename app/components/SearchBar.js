import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Find clubs nearby"
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <Icon name="search" size={20} color="#999" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 17,
    paddingHorizontal: 15,
    height: 40,
    width: "100%",
    alignSelf: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    fontFamily: "Montserrat-Medium",
  },
  icon: {
    marginLeft: 10,
  },
});
