import { Box, Stack } from "@mui/material"

interface ContactItemProps {
  title: string
  text: string
}

const ContactItem: React.FC<ContactItemProps> = ({ title, text }) => {
  return (
    <Stack>
      <Box
        textTransform="uppercase"
        fontWeight={800}
        fontSize={15}
        letterSpacing={1}
        fontFamily="Yantramanav, sans-serif"
        color="black"
      >
        {title}
      </Box>
      <Box>{text}</Box>
    </Stack>
  )
}

export default ContactItem
