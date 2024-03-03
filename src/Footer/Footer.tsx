import { Box, Stack } from "@mui/material"
import React from "react"
import { fontStyles, footerStyles } from "./FooterStyles"
import IconLink from "../IconLink/IconLink"

const Footer: React.FC = () => {
  return (
    <Stack style={footerStyles} direction="row" justifyContent="space-between" alignItems="center">
      <Box paddingLeft={10}>
        <IconLink />
      </Box>
      <Stack style={fontStyles} spacing={1.5}>
        <Box textTransform="uppercase">Company</Box>
        <Stack>
          <Box>About</Box>
          <Box>Contact</Box>
        </Stack>
      </Stack>
      <Box></Box>
    </Stack>
  )
}

export default Footer
