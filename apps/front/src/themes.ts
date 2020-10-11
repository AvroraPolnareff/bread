import {DefaultTheme} from "styled-components";
import Color from "color"

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#A5E8E8",
    secondary: "#c1c1c1",
    tertiary: "#d7d7d7",
    danger: "#dba3a3",
    success: "#A3DBA3",
    warning: "#e8dba5",
    darken: {
      primary: Color("#A5E8E8").darken(0.2).toString(),
      secondary: Color("#c1c1c1").darken(0.2).toString(),
      tertiary: Color("#d7d7d7").darken(0.2).toString(),
      danger: Color("#dba3a3").darken(0.2).toString(),
      success: Color("#A3DBA3").darken(0.2).toString(),
      warning: Color("#e8dba5").darken(0.2).toString(),
    }
  }
}
