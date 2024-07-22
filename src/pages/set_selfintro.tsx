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

  const handleLogin = () => {
    if (name == 'admin') {
      const url='selfintro';
      window.open(url, '_blank')
    } else {
      alert('ログインに失敗しました。入力内容を再度確認してください。');
    }
  };
    return(
      <Flex width='500px'>
        <Box p={5}>
            <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} position="absolute"
            top='5'
            right="5" >
              言語
              </MenuButton>
            <MenuList>
              <MenuItem>
              <Link href='set_selfintro'>日本語</Link>
              </MenuItem>
              <MenuItem>
               <Link href='set_selfintro_en'>英語</Link>
              </MenuItem>
           </MenuList>
          </Menu>
          
        <Heading as='h2' mb={5}>ログイン画面</Heading>
        <FormControl isRequired>
            <Input placeholder='ニックネーム' mb={2} onChange={(e) => setName(e.target.value)}/>
            <FormHelperText mb={5}>研究室内でのニックネームを入力してください</FormHelperText>
        </FormControl>
        
        <Button colorScheme='blue' mb={6} onClick={handleLogin}>
            ログイン
            </Button>
            </Box>
          </Flex>
    )
}