import { extendTheme } from '@chakra-ui/react'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const customTheme = extendTheme({ config })

export default customTheme
