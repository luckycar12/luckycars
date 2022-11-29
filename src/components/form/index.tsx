import { tw } from 'twind';
import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, useColorModeValue, Textarea } from '@chakra-ui/react';

export default function Form() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={{ base: `0`, md: `100px 0` }}
      maxWidth="1200px"
      width="100%"
      margin="0 auto"
      flexDirection={{ base: `column`, md: `row` }}
    >
      <img
        src="https://antoni.de/wp-content/uploads/2022/06/mb_edt_web_case_module05_1200x1200px.jpg"
        alt=""
        width="580px"
        height="580px"
      />
      <Flex flexDirection={{ base: `column`, md: `row` }} mt={{ base: `20px`, md: `0` }}>
        <div className={tw(`text-center`)}>
          <p className={tw(`mt-2 text-5xl font-bold tracking-tight text-black title-text`)}>Wyszukaj auto</p>
        </div>
        <Flex align="center" justify="center">
          <Stack spacing={8} mx="auto" maxW="lg" py={4} px={6} minW={{ base: `500px`, xs: `inherit` }}>
            <Box rounded="lg" bg={useColorModeValue(`white`, `gray.700`)} p={8}>
              <Stack spacing={4}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel fontFamily="Merc">Imię</FormLabel>
                    <Input type="text" required />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="email" isRequired>
                    <FormLabel fontFamily="Merc">Email</FormLabel>
                    <Input type="email" required />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="telefon" isRequired>
                    <FormLabel fontFamily="Merc">Telefon</FormLabel>
                    <Input type="text" required />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="description">
                    <FormLabel fontFamily="Merc">Opis</FormLabel>
                    <Textarea />
                  </FormControl>
                </Box>
                <Stack spacing={10} pt={2}>
                  <Button
                    borderRadius="10px"
                    fontFamily="Merc"
                    fontWeight="500"
                    loadingText="Submitting"
                    size="lg"
                    bg="#000"
                    color="white"
                  >
                    Wyślij
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}
