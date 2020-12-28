import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument