import React, { ReactNode } from "react"
import { ThemeProvider } from "emotion-theming"
import { MDXProvider } from "@mdx-js/react"
import { GlobalStyles, theme } from "./src/utils/global-styles"

const components = {}

export const wrapRootElement = ({ element }): ReactNode => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeProvider>
  </>
)
