import { Container, Heading, VStack, Text, Code } from '@chakra-ui/react'

function Home() {
  return (
    <Container>
      <VStack my={24} spacing={12}>
        <Heading as="h1" fontSize="9xl" textAlign="center">
          Dark
        </Heading>
        <Text fontSize="3xl" textAlign="center">
          An opinated, dark-themed Next.js &amp; Chakra UI GitHub repository
          template
        </Text>
        <Text>
          Hit the ground running with one <Code>yarn install</Code>.
        </Text>
      </VStack>
    </Container>
  )
}

export default Home
