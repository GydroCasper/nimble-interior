import React from "react"
import { sectionCaptionStyles, sectionStyles, sectionTextStyles } from "../Styles"
import { Box, Button, Stack } from "@mui/material"

const Intro: React.FC = () => {
  return (
    <Stack style={sectionStyles} justifyContent="center">
      <Box style={sectionCaptionStyles}>Немного слов о себе</Box>
      <Box style={sectionTextStyles}>Я самая классная и умная</Box>
      <Box marginTop={5}><Button variant="contained">Contact me</Button></Box>
    </Stack>
  )
}

export default Intro
