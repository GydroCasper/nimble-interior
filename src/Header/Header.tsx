import React from "react"
import { headerStyles, navLinkStyles, navStyles } from "./HeaderStyles"
import IconLink from "../IconLink/IconLink"
import { Box, Stack } from "@mui/material"

const Header: React.FC = () => {
  return (
    <Stack style={headerStyles} direction="row">
      <Box paddingLeft={10}>
        <IconLink />
      </Box>
      <nav style={navStyles}>
        <a href="/" style={navLinkStyles}>
          About
        </a>
        <a href="/contact" style={navLinkStyles}>
          Contact
        </a>
      </nav>
      <div></div>
    </Stack>
  )
}

export default Header
