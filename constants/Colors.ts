/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  primary: {
    50: "#f5f5fd",
    100: "#edecfb",
    200: "#dddcf8",
    300: "#c3bff3",
    400: "#a49aeb",
    500: "#8371e1",
    600: "#7053d4",
    700: "#6040c1",
    800: "#5136a1",
    900: "#442e84",
    950: "#2f2067", // source (customize at https://uicolors.app/create)
  },
};
