import React from "react"
import {
  sectionCaptionStyles,
  sectionStyles,
  sectionTextStyles,
} from "../Styles"
import { Box, Stack } from "@mui/material"
import ContactItem from "./ContactItem"

const Contact: React.FC = () => {
  return (
    <Stack style={sectionStyles} justifyContent="center" alignItems="center">
      <Box style={sectionCaptionStyles}>Contacts</Box>
      <Stack style={sectionTextStyles}>
        <ContactItem title="email" text="contact@nimbleinterior.com" />
        <ContactItem title="our location" text="Massachusetts" />
      </Stack>
    </Stack>
  )
}

export default Contact
