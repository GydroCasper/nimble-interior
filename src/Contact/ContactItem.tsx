import { Box, Stack } from "@mui/material"

interface ContactItemProps {
  title: string
  text: string
}

const ContactItem: React.FC<ContactItemProps> = ({ title, text }) => {
  return (
    <Stack>
      <Box>{title}</Box>
      <Box>{text}</Box>
    </Stack>
  )
}

export default ContactItem
