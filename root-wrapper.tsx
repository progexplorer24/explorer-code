import React, { ReactNode } from "react"
import { ThemeProvider } from "emotion-theming"
import { GlobalStyles, theme } from "./src/utils/global-styles"

export const wrapRootElement = ({ element }): ReactNode => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </>
)
