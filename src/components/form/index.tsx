import { tw } from 'twind';
import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, useColorModeValue, Textarea } from '@chakra-ui/react';

export default function Form() {
  return (
    <section className={tw(`pt-28 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`text-center`)}>
          <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Wyszukaj auto</h2>
          <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Wyszukaj auto</p>
        </div>
        <Flex align="center" justify="center">
          <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6} minW="500px">
            <Box rounded="lg" bg={useColorModeValue(`white`, `gray.700`)} p={8}>
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
                  <Button borderRadius="12px" loadingText="Submitting" size="lg" bg="#000" color="white">
                    Wyślij
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </div>
    </section>
  );
}
