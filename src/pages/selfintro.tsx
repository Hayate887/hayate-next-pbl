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
              ログイン画面に戻る
            </MenuButton>
            <MenuList>
            <Link href='set_selfintro'  target='_blank'>
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
      </Box>

  <Box p={4}>
    <Center>
      <Heading as='h1'>hayateの自己紹介ページ</Heading>
    </Center>

  </Box>
  <Tabs>
    <TabList>
      <Tab>hayateについて</Tab>
      <Tab>私の研究テーマ</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <h2><b>名前</b> : hayate</h2>
        <h2><b>年齢</b> : 20</h2>
        <h2><b>趣味</b> : ちいかわ</h2>
        <h2><b>最近ハマっている事</b> : ガチャガチャ</h2>
      </TabPanel>

      <TabPanel>
        <Heading as='h1'>研究テーマについて</Heading>
      </TabPanel>

    </TabPanels>
  </Tabs>
  </>
  );
}

