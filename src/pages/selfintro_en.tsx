import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box, Button, Center, Heading,
  Menu, MenuButton,
  MenuItem, MenuList,
  Tab, TabList, TabPanel, TabPanels, Tabs
} from '@chakra-ui/react';
import Link from "next/link";

export default function English() {
  return (<>
  <Box p={5}>
            <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} position="absolute"
            top='5'
            right="5" >
              Back to the Sign-in page
            </MenuButton>
            <MenuList>
            <Link href='set_selfintro'  target='_blank'>
              <MenuItem>
              Japanese
              </MenuItem>
              </Link>
              <Link href='set_selfintro_en'>
              <MenuItem>
              English
              </MenuItem>
              </Link>
            </MenuList>
          </Menu>
      </Box>

  <Box p={3}>
    <Center>
      <Heading as='h1'>hayate's page</Heading>
    </Center>
  </Box>
  <Tabs>
    <TabList>
      <Tab>About me</Tab>
      <Tab>My research theme</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <h2><b>Name</b> : hayate</h2>
        <h2><b>Age</b> : 20</h2>
        <h2><b>Hobby</b> : Chii-kawa</h2>
        <h2><b>The thing what I'm into</b> : capsule toys</h2>
      </TabPanel>

      <TabPanel>
        <Heading as='h1'>About My Research</Heading>
      </TabPanel>

    </TabPanels>
  </Tabs>
  </>
  );
}

