import React from "react"
import { headerStyles, navLinkStyles, navStyles } from "./HeaderStyles"
import IconLink from "../IconLink/IconLink"
import { Box, Stack } from "@mui/material"
import { NavLink } from "react-router-dom"

const activeStyle = {
  opacity: 1,
  color: "#1471b9",
  fontWeight: 600,
}

const Header: React.FC = () => {
  return (
    <Stack style={headerStyles} direction="row">
      <Box paddingLeft={10}>
        <IconLink />
      </Box>
      <nav style={navStyles}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...navLinkStyles, ...activeStyle } : navLinkStyles
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? { ...navLinkStyles, ...activeStyle } : navLinkStyles
          }
        >
          Contact
        </NavLink>
      </nav>
      <div></div>
    </Stack>
  )
}

export default Header
