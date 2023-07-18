import { Text } from "react-native";
function Post({ post }) {
  return <Text style={{ marginBottom: 10 }}> - {post.title} </Text>;
}

export default Post;
