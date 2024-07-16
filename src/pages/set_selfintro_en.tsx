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

        <Heading as='h2' mb={4}>Log in</Heading>
        <FormControl isRequired>
            <FormLabel>nickname</FormLabel>
            <Input placeholder='name' mb={2} />
            <FormHelperText mb={5}>Plase input in lowercase</FormHelperText>
        </FormControl>
        <Button colorScheme='blue' mb={6}>
            <Link href={'selfintro_en'}  target='_blank'>Log in</Link>
            </Button>
        </Box>
      </Flex>
    )
}