import React from "react"
import Intro from "./Intro/Intro"
import { Stack } from "@mui/material"
import WhyUs from "./WhyUs/WhyUs"

const Home: React.FC = () => {
  return (
    <Stack>
      <Intro />
      <WhyUs />
    </Stack>
  )
}

export default Home
