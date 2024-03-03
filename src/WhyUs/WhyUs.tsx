import React from "react"
import { evenSectionStyles, sectionCaptionStyles, sectionStyles, sectionTextStyles } from "../Styles"
import { Box, Stack } from "@mui/material"

const Intro: React.FC = () => {
  return (
    <Stack style={{...sectionStyles, ...evenSectionStyles}} justifyContent="center" alignItems="center">
      <Box style={sectionCaptionStyles}>Why Choose Us?</Box>
      <Box style={sectionTextStyles}>Я всё умею</Box>
    </Stack>
  )
}

export default Intro