"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Or return <Skeleton />

  return (
    <div className="flex flex-row justify-center items-center gap-1.5">
      <Switch className="cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
      {theme === "light" ? <Sun color="white" size={20} /> : <Moon size={20} />}
    </div>
  );
}
