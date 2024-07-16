import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Home(){
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
          
        

        <Heading as='h2' mb={4}>ログイン画面</Heading>
        <FormControl isRequired>
          <FormLabel>ニックネーム</FormLabel>
            <Input placeholder='名前' mb={2} />
            <FormHelperText mb={5}>小文字で入力してください</FormHelperText>
        </FormControl>
        
        <Button colorScheme='blue' mb={6}>
            <Link href={'selfintro'}  target='_blank'>ログイン</Link>
            </Button>
            </Box>
          </Flex>
    )
}