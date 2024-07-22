import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box, Button, Center, Heading,
  Menu, MenuButton,
  MenuItem, MenuList,
  Tab, TabList, TabPanel, TabPanels, Tabs, Text
} from '@chakra-ui/react';
import Link from "next/link";

export default function English() {
  return (<>
  <Box p={5}>
            <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} position="absolute"
            top='5'
            right="5" >
              Back to the Log in
            </MenuButton>
            <MenuList>
              <MenuItem>
              <Link href='set_selfintro'  target='_blank'>Japanese</Link>
              </MenuItem>
              <MenuItem>
              <Link href='set_selfintro_en'>English</Link>
              </MenuItem>
            </MenuList>
          </Menu>
      </Box>

  <Box p={4}>
    <Center>
      <Heading as='h1'>hayate's page</Heading>
    </Center>

  </Box>
  <Tabs>
    <TabList>
      <Tab>Welcome!</Tab>
      <Tab>About me</Tab>
      <Tab>My research theme</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <Heading as="h1" mb={6}>This is hayate's page in English version.</Heading>
        <Text>I hope to be friends with you!</Text>
        <Text>I'm not good at English, so please go easy on me.</Text>
        <Text>Nice to meet you.</Text>
      </TabPanel>

      <TabPanel>
        <h2><b>Name</b> : hayate</h2>
        <h2><b>Age</b> : 20</h2>
        <h2><b>Hobby</b> : Chii-kawa</h2>
        <h2><b>The thing what I'm into</b> : capsule toys</h2>
        <Button colorScheme='blue' mb={6}>
          <Link href="/intro/daily"> My Capsule toys's Diary </Link>
        </Button>
      </TabPanel>

      <TabPanel>
        <Heading as='h1'>About My Research</Heading>
      </TabPanel>

    </TabPanels>
  </Tabs>
  </>
  );
}

