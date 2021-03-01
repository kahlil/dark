import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: Partial<ThemeConfig> = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const customTheme = extendTheme({ config })

export default customTheme
