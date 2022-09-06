import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, useColorModeValue, Textarea } from '@chakra-ui/react';

export default function Form() {
  return (
    <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue(`gray.50`, `gray.800`)}>
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Box rounded="lg" bg={useColorModeValue(`white`, `gray.700`)} boxShadow="lg" p={8}>
          <Stack spacing={4}>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>Imię</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="telefon" isRequired>
                <FormLabel>Telefon</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="description" isRequired>
                <FormLabel>Opis</FormLabel>
                <Textarea />
              </FormControl>
            </Box>
            <Stack spacing={10} pt={2}>
              <Button loadingText="Submitting" size="lg" bg="#000" color="white">
                Wyślij
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
