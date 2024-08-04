"use client";

import { Button } from "@/components/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";

interface DropdownItemProps {
  option: "light" | "dark" | "system";
}

const ThemeOptions: DropdownItemProps["option"][] = ["light", "dark", "system"];

const DropdownItem = ({ option }: DropdownItemProps) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuItem
      onClick={() => setTheme(option)}
      className="capitalize"
      aria-label={`Switch to ${option} theme`}
    >
      {option}
    </DropdownMenuItem>
  );
};

export default function ThemeSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="sr-only">Select theme</span>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {ThemeOptions.map((option) => (
          <DropdownItem key={option} option={option} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
