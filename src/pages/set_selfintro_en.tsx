import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home(){
  const [name, setName]=useState('')
  const [error, setError]=useState('')

  const handleLogin = () => {
    if (name == 'admin') {
      setError('')
      const url='selfintro_en';
      window.open(url, '_blank')
    } else {
      setError('Login failed. Please check your input again.')
    }
  };

    return(
      <Flex width='500px'>
        <Box p={5}>
            <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} position="absolute"
            top='5'
            right="5">
              Language
            </MenuButton>
            <MenuList>
              <MenuItem>
              <Link href='set_selfintro'>Japanese</Link>
              </MenuItem>
              <MenuItem>
              <Link href='set_selfintro_en'>English</Link>
              </MenuItem>
            </MenuList>
          </Menu>

        <Heading as='h2' mb={5}>Sign-in page</Heading>
        <FormControl>
            <Input placeholder='name' mb={2} onChange={(e) => setName(e.target.value)}/>
            <FormHelperText mb={5}>Plase input your nickname in Iyatomi lab</FormHelperText>
        </FormControl>
        <Button colorScheme='blue' mb={6} onClick={handleLogin}>
            Login
            </Button>
            <Box color={'red'}>
            {error && <div>{error}</div>}
            </Box>
        </Box>
        </Flex>
    )
}