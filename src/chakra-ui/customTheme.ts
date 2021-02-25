import { extendTheme, ColorMode } from '@chakra-ui/react'

const config: { useSystemColorMode: boolean; initialColorMode: ColorMode } = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const customTheme = extendTheme({ config })

export default customTheme
