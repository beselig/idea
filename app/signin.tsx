import { Button } from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { Styles } from "@/constants/Styles";
import { useAuth } from "@/hooks/useAuth";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  useColorScheme,
  StyleSheet,
  Text,
} from "react-native";

export default function SignIn() {
  const { userQuery, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userQuery.data?.data.user) {
      router.push("/");
    }
  }, [userQuery.data]);

  const colorscheme = useColorScheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    if (email && password) {
      try {
        await signIn.mutateAsync({ email, password });
        router.push("/");
      } catch (error) {}
    }
  }

  const colors = Colors[colorscheme ?? "dark"];
  const pageContainerStyles = StyleSheet.compose(Styles.pageContainer, {
    justifyContent: "center",
  });
  const textStyles = StyleSheet.compose(styles.text, { color: colors.text });
  const inputStyles = StyleSheet.compose(Styles.input, {
    color: Colors.light.text,
    backgroundColor: Colors.light.background,
    borderColor: Colors.primary[950],
    borderWidth: 1,
  });

  return (
    <View style={pageContainerStyles}>
      {userQuery.isLoading ? (
        <Text style={textStyles}>Lade ...</Text>
      ) : (
        <>
          <Text style={textStyles}>Login</Text>
          <TextInput
            style={inputStyles}
            textContentType="emailAddress"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={inputStyles}
            secureTextEntry={true}
            textContentType="password"
            onChangeText={setPassword}
            value={password}
          />
          <Button onPress={submit} title="Login" />
          <Link style={Styles.link} href="/signup">
            Register
          </Link>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 32, fontWeight: "bold" },
});
