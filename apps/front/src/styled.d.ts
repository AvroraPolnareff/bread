import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
      danger: string;
      success: string;
      warning: string;
      darken: {
        primary: string;
        secondary: string;
        tertiary: string;
        danger: string;
        success: string;
        warning: string;
      }
    }
  }
}
