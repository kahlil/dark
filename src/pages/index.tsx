import { Container, Heading, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container colorScheme="teal">
      <VStack>
        <Heading as="h1" fontSize="9xl">
          Grit
        </Heading>
      </VStack>
    </Container>
  );
}
