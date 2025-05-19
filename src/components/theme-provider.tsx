"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  //provide theme to next provider
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
