import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    FormControl, FormHelperText, FormLabel,
    Heading,
    Input, InputGroup, InputRightElement,
    Menu, MenuButton,
    Text,
    VStack
} from '@chakra-ui/react';
import axios from 'axios';
import Link from "next/link";
import { useState } from 'react';

export default function App(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]=useState('')
    const [show, setShow]=useState(false)
    const [language, setLanguage] = useState('ja');
    const url='selfintro';
    
    const handleClick=()=>{
        setShow(!show)
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/creates', {
                username,
                password
            });
            console.log(response.data);
            if(response.status==200){
                window.open(url, '_blank')
            }
        } catch (error) {
            console.error(error);
            setError(language=='ja' ? '入力内容に誤りがあります。' : 'There is an error in the information you entered.')
        }
    };
    
    const handleLanguageChange = () => {
        setLanguage(language == 'ja' ? 'en' : 'ja');
    };

    return (
    <Container>
        <Flex justify="center" align="center" height="100vh" width="full">
            <Box p={50} borderWidth="1px" borderRadius='lg'>
                <Menu>
                    <Link href='signup'>
                    <MenuButton as={Button} position="absolute" top="5" right="5" onClick={handleLanguageChange}> 
                        {language == 'ja' ? 'English' : '日本語'}
                    </MenuButton>
                    </Link>
                </Menu>
                
                <Center>
                    {language=='ja' ? <Heading mb={10}>新規登録</Heading> : <Heading mb={10}>Sign up</Heading>}
                </Center>
                
                <Container>
                    <VStack spacing={4} align="stretch">
                        <FormControl isRequired>
                            <FormLabel>{language == 'ja' ? 'ユーザー名' : 'username'}</FormLabel>
                            <Input htmlSize={4} value={username} onChange={(e) => setUsername(e.target.value)} />
                            <FormHelperText mb={1}>{language == 'ja' ? '研究室内のニックネームを入力してください' : 'Please input your nickname in laboratory'}</FormHelperText>
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
                        
                        <Button onClick={handleSubmit} mb={10} colorScheme="teal">{language == 'ja' ? '登録' : 'Register'}</Button>
                        {error && <Text color='red'>{error}</Text>}
                    </VStack>
                </Container>
            </Box>
        </Flex>
    </Container>
);
};