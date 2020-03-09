import React from "react"
import { Link } from "gatsby"

import tw from "tailwind.macro"
import { css } from "@emotion/core"

type Header = {
  siteTitle: string
  siteDescription?: string
}

export const Header: React.FC<Header> = ({
  siteTitle = "",
  siteDescription = "",
}: Header) => (
  <header
    css={css`
      ${tw`w-full mb-8 bg-purple-800`}
    `}
  >
    <Link to="/">
      <div
        css={css`
          ${tw`text-4xl text-white`}
        `}
      >
        {siteTitle}
      </div>
      <p>{siteDescription}</p>
    </Link>
  </header>
)
