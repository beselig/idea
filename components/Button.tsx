import { Styles } from "@/constants/Styles";
import { ButtonProps, Pressable, Text } from "react-native";

export function Button(props: ButtonProps) {
  const { onPress, title = "Save" } = props;

  return (
    <Pressable style={Styles.button} onPress={onPress}>
      <Text style={{ color: "white" }}>{title}</Text>
    </Pressable>
  );
}
