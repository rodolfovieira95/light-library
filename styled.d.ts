// import original module declarations
import "styled-components";
import { theme } from "./src/theme";

type ThemeType = typeof theme;

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    ThemeType;
  }
}
