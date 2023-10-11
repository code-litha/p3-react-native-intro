import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // mengambil keseluruhan tempat yang tersedia
    backgroundColor: "#fff",
  },
  image: {
    height: 100,
    width: 100, // 100 dpi
  },
  box: {
    borderWidth: 5,
    borderColor: "black",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default styles;
