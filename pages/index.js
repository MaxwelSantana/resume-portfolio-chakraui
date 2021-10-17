import {
  Link,
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in Brazil
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Maxwel Santana
          </Heading>
          <p>Full-stack Developer</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="https://avatars.githubusercontent.com/u/17615307?s=96&v=4"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ad
          officia necessitatibus repellendus ea distinctio adipisci, iusto sunt
          tempora laudantium, quisquam fugiat esse, eligendi aut sapiente
          voluptatum? Mollitia, sequi sed?
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Bahia, Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Complete Analysis and System Development Degree at Faculdade Impacta
          de Tecnologia
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Art, Music, Drawing, Read books</Paragraph>
      </Section>
    </Container>
  )
}

export default Home
