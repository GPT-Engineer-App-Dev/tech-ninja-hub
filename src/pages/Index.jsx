import { Box, Button, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} spacing={8} align="center">
            <Box flex={1}>
              <Heading as="h1" size="2xl" mb={4}>
                Find Top Software Talent on Particles
              </Heading>
              <Text fontSize="xl" mb={8}>
                Particles is the leading marketplace to find pre-vetted software developers specializing in web technologies like React, Node.js, .NET, Go, and JavaScript.
              </Text>
              <Button colorScheme="blue" size="lg" rightIcon={<FaArrowRight />}>
                View Developers
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB3b3JraW5nfGVufDB8fHx8MTcxMzA0ODY0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Software developers" />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={12}>
            Why Particles?
          </Heading>
          <Stack direction={["column", "row"]} spacing={12}>
            <Box>
              <Stack direction="row" align="center" mb={4}>
                <Box color="green.500" fontSize="2xl">
                  <FaCheckCircle />
                </Box>
                <Text fontSize="2xl" fontWeight="bold">
                  Pre-Vetted Talent
                </Text>
              </Stack>
              <Text fontSize="lg">Every developer on Particles is carefully vetted and tested to ensure they meet the highest standards of skill and professionalism.</Text>
            </Box>
            <Box>
              <Stack direction="row" align="center" mb={4}>
                <Box color="green.500" fontSize="2xl">
                  <FaCheckCircle />
                </Box>
                <Text fontSize="2xl" fontWeight="bold">
                  Wide Range of Skills
                </Text>
              </Stack>
              <Text fontSize="lg">From front-end frameworks to back-end languages, find developers with expertise in the specific technologies you need.</Text>
            </Box>
            <Box>
              <Stack direction="row" align="center" mb={4}>
                <Box color="green.500" fontSize="2xl">
                  <FaCheckCircle />
                </Box>
                <Text fontSize="2xl" fontWeight="bold">
                  Easy Communication
                </Text>
              </Stack>
              <Text fontSize="lg">Built-in chat, contract tools, and payment features make it simple to communicate with developers and get work done.</Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
