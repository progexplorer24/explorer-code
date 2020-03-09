import React from "react"
import { Global, css } from "@emotion/core"
import defaultConfig from "tailwindcss/defaultConfig"
import tw from "tailwind.macro"

import base from "tailwindcss/base.css"
import { Theme as TailwindTheme } from "./tailwind-types"
import projectConfig from "../../tailwind.config"

export const theme: TailwindTheme = {
  ...defaultConfig.theme,
  ...projectConfig.theme.fontFamily,
}

type GlobalStylesProps = {}

export const GlobalStyles: React.FC<GlobalStylesProps> = () => (
  <Global
    styles={css`
      ${base}
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }

      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }

      body {
        ${tw`leading-normal text-gray-900 bg-gray-100`}
      }
    `}
  />
)
