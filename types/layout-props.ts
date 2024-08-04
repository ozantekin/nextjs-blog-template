import { ComponentType } from "react";
import { IconProps } from "@phosphor-icons/react";

export interface ThemeOptionProps {
  theme: string;
  icon: ComponentType<IconProps>;
}
