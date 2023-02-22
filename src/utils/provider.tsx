import { DefaultTheme, ThemeProvider } from "styled-components";

export interface LightProviderType {
  theme: DefaultTheme;
  children: JSX.Element;
}

export const LightProvider = ({ theme, children }: LightProviderType) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
