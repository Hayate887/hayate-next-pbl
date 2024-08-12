import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input, InputGroup, InputRightElement,
  Menu, MenuButton,
  Text,
  VStack
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

export default function Home(){
  const [username, setUsername]=useState('')
  const [password, setPassword] = useState('');
  const [error, setError]=useState('')
  const [language, setLanguage] = useState('ja');
  const [show, setShow]=useState(false);
  
  const url='selfintro'
  
    const handleClick=()=>{
        setShow(!show)
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/login', {
              username,
              password,
            });
            console.log(response.data);
            if(response.status==200){
              window.open(url, '_blank') 
            }  
        } catch (error) {
            console.error(error);
            setError(language=='ja' ? 'ログインに失敗しました' : 'Login failed')
        }
    };

    const handleLanguageChange = () => {
      setLanguage(language == 'ja' ? 'en' : 'ja');
    };

    return(
    <Container>
      <Flex justify="center" align="center" height="100vh" width="full">
        <Box p={50} borderWidth="1px" borderRadius='lg' >
          <Menu>
            <MenuButton as={Button} position="absolute" top="5" right="5" onClick={handleLanguageChange}> 
              {language == 'ja' ? 'English' : '日本語'}
            </MenuButton>  
          </Menu>

          <Center>
            {language=='ja' ? <Heading mb={10}>ログイン</Heading> : <Heading mb={10}>Sign in</Heading>}
          </Center>

          <Container>
            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel>{language == 'ja' ? 'ユーザー名' : 'username'}</FormLabel>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
              </FormControl>
              
              <FormControl isRequired>
                <FormLabel>{language == 'ja' ? 'パスワード' : 'password'}</FormLabel>
                <InputGroup size='md'>
                <Input pr='3.5rem' type={show ? 'text' : 'password'} value={password} mb={5} onChange={(e) => setPassword(e.target.value)} />
                <InputRightElement width='3.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>{show? <ViewIcon /> : <ViewOffIcon />}</Button>
                </InputRightElement>
                </InputGroup>
              </FormControl>
              
              <Button onClick={handleLogin} mb={10} colorScheme="teal" variant="outline">{language == 'ja' ? 'サインイン' : 'Sign in'}</Button>
              {error && <Text color='red'>{error}</Text>}
            </VStack>
          </Container>
        </Box>
      </Flex>
    </Container>
);
};