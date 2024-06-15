import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

export type Idea = { title: string; description?: string };
export type IdeaProps = { item: Idea };

export function Idea({ item }: IdeaProps) {
  const colorScheme = useColorScheme();

  // @ts-ignore this error does not comply with react native
  const titleStyles = StyleSheet.compose([
    ideaStyles.title,
    colorScheme === "dark" ? { color: Colors[colorScheme].text } : {},
  ]);

  // @ts-ignore this error does not comply with react native
  const descriptionStyles = StyleSheet.compose([
    ideaStyles.description,
    colorScheme === "dark" ? { color: Colors[colorScheme].text } : {},
  ]);

  return (
    <View
      style={{
        backgroundColor: Colors[colorScheme ?? "dark"].background,
        borderRadius: 12,
        padding: 16,
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
      }}
    >
      <Text numberOfLines={1} style={titleStyles}>
        {item.title}
      </Text>
      {item.description && (
        <Text numberOfLines={1} style={descriptionStyles}>
          {item.description}
        </Text>
      )}
    </View>
  );
}

const ideaStyles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  description: { fontSize: 14, fontStyle: "italic" },
});
