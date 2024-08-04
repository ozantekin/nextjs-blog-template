import { ThemeOptionProps } from "@/types/layout-props";
import { Devices, MoonStars, SunDim } from "@phosphor-icons/react/dist/ssr";

export const ThemeOptions: ThemeOptionProps[] = [
  { theme: "light", icon: SunDim },
  { theme: "dark", icon: MoonStars },
  { theme: "system", icon: Devices },
];
