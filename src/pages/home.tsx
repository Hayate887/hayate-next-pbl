import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Menu, MenuButton,
  VStack
} from '@chakra-ui/react';
import Link from "next/link";
import { useState } from 'react';

export default function Japanese() {
  const [language, setLanguage] = useState('ja');
  
  const handleLanguageChange = () => {
    setLanguage(language == 'ja' ? 'en' : 'ja');
  };

  return (
  <Container>
    <Flex justify="center" align="center" height="100vh" width="full">
      <Box p={50} borderWidth="1px" borderRadius='lg'>
        <Menu>
          <MenuButton as={Button} position="absolute" top="5" right="5" onClick={handleLanguageChange}> 
            {language == 'ja' ? 'English' : '日本語'}
          </MenuButton>
        </Menu>
        
        <Center>
          {language=="ja"? <Heading mb={10}>hayateのポートフォリオ</Heading>:<Heading mb={10}>hayate&apos;s portfolio</Heading>}
        </Center>
        
        <VStack spacing={5} align="stretch">
          <Center>
            {language == 'ja' ? <b>初めての方はこちら</b> : <b>For new members</b>}
          </Center>
          
          <Center>
            <Link href='signup'>
            <Button colorScheme="teal">
              {language == 'ja' ? '新規登録' : 'Sign up'}
            </Button>
            </Link>
          </Center>
          
          <Center>
            {language == 'ja' ? <b>登録済み方はこちら</b> : <b>For exiting members</b>}
          </Center>
          
          <Center>
            <Link href='signin'>
            <Button colorScheme="teal" variant="outline">
              {language == 'ja' ? 'ログイン' : 'Sign in'}
            </Button>
            </Link>
          </Center>
        </VStack>
      </Box>
    </Flex>
  </Container>
);
}
