import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl, FormHelperText, FormLabel,
  Heading,
  Input,
  Menu, MenuButton,
  MenuItem, MenuList,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home(){
  const [name, setName]=useState('')
  const [error, setError]=useState('')

  const [b3_userList] = useState(['Cassidy', 'hayate', 'take', 'emon', 'Yoga', 'sum', 'tana', 'Faker', 'Jay', 'Balt']);
  const [b4_userList] = useState(['bell', 'knight', 'boss', 'skip', 'sharp', 'gekko', 'azemichi', 'pocari', 'takakin', 'hara']);
  const [m1_userList]=useState(['mila', 'jerk', 'galaxy', 'mitsuki', 'davis', 'ziraiya', 'shimeon', 'ranpo', 'kitasan', 'palpunte']);
  const [m2_userList]=useState(['randy', 'eto', 'matsuho', 'tomoshi', 'lucky', 'Li'])
  const [other_userList]=useState(['gent', 'Hitoshi', 'pink', 'nyan'])

  const handleLogin = () => {
    const username = b3_userList.includes(name) 
    const username2 = b4_userList.includes(name) 
    const username3=m1_userList.includes(name)
    const username4=m2_userList.includes(name)
    const username5=other_userList.includes(name)

    setError(username || username2 ||username3||username4||username5? '' : 'Login failed');

    if (username || username2 ||username3||username4||username5) {
      const url='selfintro_en';
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
                Language
                </MenuButton>
                <MenuList>
                  <Link href='set'>
                  <MenuItem>
                  Japanese
                  </MenuItem>
                  </Link>
                  </MenuList>
                  </Menu>
              
              <Center>
                <Heading as='h2' mb={10}>Log in</Heading>
                </Center>

              <Container>
                <FormControl isRequired>
                  <FormLabel>username</FormLabel>
                  <Input type='text' placeholder='nickname' mb={1} onChange={(e) => setName(e.target.value)}/>
                  <FormHelperText mb={5}>Please input your nickname in lab</FormHelperText>
                  </FormControl>
                  <Button colorScheme='blue' mb={10} onClick={handleLogin}>
                    Login
                    </Button>
                    {error && <Text color='red'>{error}</Text>}
                    </Container>
            </Box>
        </Flex>
      </Container>
    )
  }