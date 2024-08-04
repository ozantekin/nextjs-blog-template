"use client";

import { Button } from "../shadcn/button";
import { ThemeOptions } from "@/config/layout";
import { useIsMounted } from "@/hooks/useIsMounted";
import { ThemeOptionProps } from "@/types/layout-props";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";

interface ThemeButtonProps {
  option: ThemeOptionProps;
}

const ThemeButton = ({ option }: ThemeButtonProps) => {
  const { theme, icon: Icon } = option;
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme)}
      className={cn(
        "w-8 h-full rounded-md hover:bg-transparent",
        currentTheme === theme && "shadow-smooth",
        currentTheme !== theme &&
          "hover:bg-slate-50 dark:hover:bg-slate-950  transition-colors duration-300"
      )}
      aria-label={`Switch to ${theme} theme`}
      title={theme}
    >
      <Icon size={18} className="mx-auto dark:text-white " />
    </Button>
  );
};

export default function ThemeSwitcher() {
  const mounted = useIsMounted();

  if (!mounted) return null;
  return (
    <div className="border h-9 p-1 rounded-lg inline-flex items-center justify-center shrink-0 gap-1">
      <span className="sr-only">Select theme</span>
      {ThemeOptions.map((option) => (
        <ThemeButton key={option.theme} option={option} />
      ))}
    </div>
  );
}
