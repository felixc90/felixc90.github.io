// store/themeStore.ts
import { create } from "zustand";

interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

const themes: Theme[] = [
  {
    name: "paper",
    background: "#f8f3df",
    accent: "#fdfbf4",
    primary: "#282924",
    secondary: "#0d0e0b",
  },
  {
    name: "golett",
    background: "#FFEEA4",
    accent: "#6A4100",
    secondary: "#83CDCD",
    primary: "#0E6B7B",
  },
] as const satisfies Theme[];

type ThemeName = (typeof themes)[number]["name"];

const themesMap: Record<string, Theme> = themes.reduce(
  (acc, theme) => {
    acc[theme.name] = theme;
    return acc;
  },
  {} as Record<string, Theme>,
);

interface ThemeStore {
  theme: Theme;
  setTheme: (name: ThemeName) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: themesMap["paper"],
  // TODO(felix): add new themes, add font support and fix naming convention
  setTheme: (theme: ThemeName) => {
    // document.documentElement.style.setProperty(
    //   "--dark",
    //   themesMap[theme].primary,
    // );
    // document.documentElement.style.setProperty(
    //   "--darker",
    //   themesMap[theme].secondary,
    // );
    // document.documentElement.style.setProperty(
    //   "--lighter",
    //   themesMap[theme].accent,
    // );
    // document.documentElement.style.setProperty(
    //   "--light",
    //   themesMap[theme].background,
    // );
    // set({ theme: themesMap[theme] });
  },
}));
