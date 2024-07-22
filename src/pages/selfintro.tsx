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
              ログイン画面に戻る
            </MenuButton>
            <MenuList>
              <MenuItem>
              <Link href='set_selfintro'  target='_blank'>日本語</Link>
              </MenuItem>
              <MenuItem>
              <Link href='set_selfintro_en'>英語</Link>
              </MenuItem>
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
      <Tab>ようこそ！</Tab>
      <Tab>hayateについて</Tab>
      <Tab>私の研究テーマ</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <Heading as="h1" mb={6}>ここは、hayateの自己紹介サイトです!</Heading>
        <Text>皆さんと仲良くなりたくて制作しました。</Text>
      </TabPanel>

      <TabPanel>
        <h2><b>名前</b> : hayate</h2>
        <h2><b>年齢</b> : 20</h2>
        <h2><b>趣味</b> : ちいかわ</h2>
        <h2><b>最近ハマっている事</b> : ガチャガチャ</h2>
        <Button colorScheme='blue' mb={6}>
          <Link href="/intro/daily"> ガチャガチャ日記 </Link>
        </Button>
      </TabPanel>

      <TabPanel>
        <Heading as='h1'>研究テーマについて</Heading>
      </TabPanel>

    </TabPanels>
  </Tabs>
  </>
  );
}

