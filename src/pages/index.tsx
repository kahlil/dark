import {
  Container,
  Heading,
  VStack,
  Stack,
  Text,
  Code,
  OrderedList,
  ListItem,
  Link,
  Button,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Switch,
  Avatar,
  Flex,
  Badge,
  Box,
  Divider,
} from '@chakra-ui/react'

function Home() {
  return (
    <Container>
      <VStack my={24} spacing={12}>
        <Heading as="h1" fontSize="9xl" textAlign="center">
          Dark
        </Heading>
        <Text fontSize="3xl" textAlign="center">
          An opinionated, dark-themed Next.js &amp; Chakra UI GitHub repository
          template
        </Text>
        <Text>
          Hit the ground running with one <Code>yarn install</Code>.
        </Text>

        <Divider />

        <Container centerContent>
          <Heading as="h2" fontSize="2xl" mb={4}>
            How to use
          </Heading>
          <OrderedList>
            <ListItem>
              Generate a repository with this template by clicking on{' '}
              <Link
                href="https://github.com/kahlil/dark/generate"
                isExternal
                textDecoration="underline"
              >
                github.com/kahlil/dark/generate
              </Link>
            </ListItem>
            <ListItem>Clone your new repository</ListItem>
            <ListItem>
              Run <Code>yarn install</Code>
            </ListItem>
            <ListItem>
              Hit the ground running with{' '}
              <Link
                href="https://nextjs.org"
                isExternal
                textDecoration="underline"
              >
                Next.js
              </Link>
              ,{' '}
              <Link
                href="https://www.typescriptlang.org/"
                isExternal
                textDecoration="underline"
              >
                TypeScript
              </Link>{' '}
              &amp;{' '}
              <Link
                href="https://chakra-ui.com"
                isExternal
                textDecoration="underline"
              >
                Chakra UI
              </Link>{' '}
              with the dark theme as the default
            </ListItem>
          </OrderedList>
        </Container>

        <Divider />

        <Container>
          <Heading as="h3" fontSize="xl" mb={4} textAlign="center">
            Chakra + Next = ❤️
          </Heading>
          <Stack>
            <Text>
              After getting started with this GitHub repo template you have{' '}
              Chakra UI ready to go and configured for Next.js.
            </Text>
            <Text>
              The dark theme is configured to be the inital color mode.
            </Text>
            <Text>
              The <em>full arsenal</em> of Chakra UI's features and components
              is at your disposal in this Next.js app and configurable to your
              wishes.
            </Text>

            <Text pb={2}>Oh, look! Chakra UI buttons:</Text>
            <Stack pb={2} spacing={4} direction="row" align="center">
              <Button size="xs">Button</Button>
              <Button colorScheme="teal" size="sm">
                Button
              </Button>
              <Button colorScheme="purple" size="md">
                Button
              </Button>
              <Button colorScheme="pink" size="lg">
                Button
              </Button>
            </Stack>

            <Text py={2}>Woah! A Chakra UI slider:</Text>
            <Slider
              pb={2}
              aria-label="slider-ex-2"
              colorScheme="pink"
              defaultValue={30}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

            <Text pt={4} pb={2}>
              Blimey! Chakra UI switches:
            </Text>
            <Stack pb={2} align="center" direction="row">
              <Switch size="sm" colorScheme="teal" />
              <Switch size="md" colorScheme="purple" />
              <Switch size="lg" colorScheme="pink" />
            </Stack>

            <Text py={2}>
              Damn, yo! Composed Chakra UI components for displaying data:
            </Text>
            <Flex pb={2}>
              <Avatar src="https://bit.ly/sage-adebayo" />
              <Box ml="3">
                <Text fontWeight="bold">
                  Segun Adebayo
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                </Text>
                <Text fontSize="sm">UI Engineer, creator of Chakra UI</Text>
              </Box>
            </Flex>

            <Text py={2}>
              See the code for the examples above in the{' '}
              <Link
                href="https://github.com/kahlil/dark/blob/main/src/pages/index.tsx"
                isExternal
                textDecoration="underline"
              >
                source code
              </Link>
              .
            </Text>
          </Stack>
        </Container>

        <Divider />

        <Container>
          <Heading as="h3" fontSize="xl" mb={4} textAlign="center">
            Other Tech 🦾
          </Heading>
          <Stack>
            <Text>
              Besides the main tech stack of Next, TypeScript and Chakra UI,
              this template also comes with{' '}
              <Link
                href="https://prettier.io"
                isExternal
                textDecoration="underline"
              >
                Prettier
              </Link>
              ,{' '}
              <Link
                href="https://eslint.org/"
                isExternal
                textDecoration="underline"
              >
                ESLint
              </Link>
              ,{' '}
              <Link
                href="https://github.com/azz/pretty-quick"
                isExternal
                textDecoration="underline"
              >
                pretty-quick
              </Link>{' '}
              ,{' '}
              <Link
                href="https://typicode.github.io/husky"
                isExternal
                textDecoration="underline"
              >
                Husky
              </Link>{' '}
              ,
              <Link
                href="https://jestjs.io/"
                isExternal
                textDecoration="underline"
              >
                Jest
              </Link>
              , and{' '}
              <Link
                href="https://testing-library.com/"
                isExternal
                textDecoration="underline"
              >
                Testing Library
              </Link>
              .
            </Text>
            <Text>
              Pre-configured with sensible defaults provided by the community or
              the creators of the tools.
            </Text>
          </Stack>
        </Container>
        <Divider />
        <Text textAlign="center">
          Made with ✨ by{' '}
          <Link
            href="https://www.kahlillechelt.com"
            isExternal
            textDecoration="underline"
          >
            Kahlil Lechelt
          </Link>{' '}
          &bull;{' '}
          <Link
            href="https://github.com/kahlil/dark"
            isExternal
            textDecoration="underline"
          >
            github/kahlil/dark
          </Link>{' '}
          &bull;{' '}
          <Link
            href="https://twitter.com/kahliltweets"
            isExternal
            textDecoration="underline"
          >
            @kahliltweets
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default Home
