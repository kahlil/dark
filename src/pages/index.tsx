import { NextPage } from 'next'
import { Container, Heading, VStack } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container>
      <VStack>
        <Heading as="h1" fontSize="9xl">
          Grit
        </Heading>
      </VStack>
    </Container>
  )
}

export default Home
