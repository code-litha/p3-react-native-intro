import { Text, StyleSheet, Button } from "react-native";

function Profile() {
  const onClickButton = (event) => {
    console.log("Button di press");
    console.log(event, "<<< event");
  };

  return (
    <>
      <Text style={[styles.heading, styles.textBlue, styles.textRed]}>
        Profile nih
      </Text>
      <Text>Profile kedua</Text>
      <Button
        onPress={onClickButton}
        title="Click Me"
        color={"blue"}
        // style={{ backgroundColor: "red" }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textRed: {
    color: "red",
  },
  textBlue: {
    color: "blue",
  },
});

export default Profile;
