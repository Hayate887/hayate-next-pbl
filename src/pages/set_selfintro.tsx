import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home(){
  const [name, setName]=useState('')
  const [error, setError]=useState('')

  const [b3_userList] = useState(['Cassidy', 'hayate', 'take', 'emon', 'Yoga', 'sum', 'tana', 'Faker', 'Jay', 'Balt']);
  const [b4_userList] = useState(['bell', 'knight', 'boss', 'skip', 'sharp', 'gekko', 'azemichi', 'pocari', 'takakin', 'hara']);
  const [m1_userList]=useState(['mila', 'jerk', 'galaxy', 'mitsuki', 'davis', 'ziraiya', 'shimeon', 'ranpo', 'kitasan']);
  const [m2_userList]=useState(['randy', 'eto', 'matsuho', 'tomoshi', 'lucky', 'Li'])
  const [other_userList]=useState(['gent', 'Hitoshi', 'pink', 'nyan'])

  const handleLogin = () => {
    const isValidUsername = b3_userList.includes(name) 
    const isValidUsername2 = b4_userList.includes(name) 
    const isValidUsername3=m1_userList.includes(name)
    const isValidUsername4=m2_userList.includes(name)
    const isValidUsername5=other_userList.includes(name)

    setError(isValidUsername || isValidUsername2 ||isValidUsername3||isValidUsername4||isValidUsername5? '' : 'ログインに失敗しました');

    if (isValidUsername || isValidUsername2 ||isValidUsername3||isValidUsername4||isValidUsername5) {
      
      const url='selfintro';
      window.open(url, '_blank')}
    }
  
 
    return(
      <Container>
      <Flex 
      justify="center"
      align="center"
      height="100vh"
      width="full">
         <Box p={50} borderWidth="1px" borderRadius='lg'>
         
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} position="absolute"
        top='5'
        right="5">
          言語
          </MenuButton>
          <MenuList>
            <Link href='set_selfintro'>
            <MenuItem>
            日本語
            </MenuItem>
            </Link>
            <Link href='set_selfintro_en'>
            <MenuItem>
            英語
            </MenuItem>
            </Link>
            </MenuList>
            </Menu>

            <Center>
          <Heading as='h2' mb={10}>サインイン</Heading>
          </Center>
          <Container>
        <FormControl isRequired>
          <FormLabel>ユーザー名</FormLabel>
          <Input placeholder='ニックネーム' mb={1} value={name} onChange={(e) => setName(e.target.value)}/>
          <FormHelperText mb={5}>研究室内でのニックネームを入力してください</FormHelperText>
          </FormControl>
             
        <Button colorScheme='blue' mb={10} onClick={handleLogin}>
          ログイン
          </Button>
          {error && <Text color='red'>{error}</Text>}
          </Container>
          </Box>
     </Flex>
    </Container>
    )
}