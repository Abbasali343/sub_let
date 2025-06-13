import { useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Styles";

export default function Home() {
  const router = useRouter();
  const handlePress = () => {
    router.push("/LogIn");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Hifuidfdjsfnjdsn</Text>
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text>Go To LogIn</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
