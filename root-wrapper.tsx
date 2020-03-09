/* eslint-disable react/display-name */
import React, { ReactNode } from "react"
import { ThemeProvider } from "emotion-theming"
import { MDXProvider } from "@mdx-js/react"
import { GlobalStyles, theme } from "./src/utils/global-styles"
import { H1, H2, H3, H4 } from "./src/components/page-elements"

const components = {
  h1: (props): ReactNode => <H1 {...props} />,
  h2: (props): ReactNode => <H2 {...props} />,
  h3: (props): ReactNode => <H3 {...props} />,
  h4: (props): ReactNode => <H4 {...props} />,
}

export const wrapRootElement = ({ element }): ReactNode => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeProvider>
  </>
)
