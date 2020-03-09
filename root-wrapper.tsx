import React, { ReactNode } from "react"
import { ThemeProvider } from "emotion-theming"
import { MDXProvider } from "@mdx-js/react"
import { GlobalStyles, theme } from "./src/utils/global-styles"

export const wrapRootElement = ({ element }): ReactNode => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MDXProvider>{element}</MDXProvider>
    </ThemeProvider>
  </>
)
