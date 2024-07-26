import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
              メニュー
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

  <Box p={5}>
    <Center>
      <Heading as='h1' color='red'>hayateの自己紹介ページ</Heading>
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
        <Heading as='h2' p={3} mb={5}>
          <Center>
            2段階ファインチューニングによる個性抽出手法の提案
            </Center>
            </Heading>
        <Accordion defaultIndex={[-1]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  目的
                </Box>
                <AccordionIcon />
              </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                少ないデータでも精度の高い個性の抽出を行えるようにしたい
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='left'>
                        方法
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <p>1. 青空文庫で公開されてい著作権が切れた全作家の作品を一つ選び、事前学習済みモデルでファインチューニングを行う</p>
                          <p>2. 個性を抽出したい作家の全作品（パブリックドメイン）を、事前学習済みモデルと1で作成したモデルでそれぞれファインチューニングを行う</p>
                          <p>3. コサイン類似度やBLUEスコア等で性能評価を行う</p>
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='left'>
                        現在の進捗
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                         ・データセット構築の途中
                         <p>・夏休み終了時までには少なくとも一人データセットの構築を行い、性能評価まで行いたい</p>
                          </AccordionPanel>
                          </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='left'>
                        最終目標
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                         いい結果が出たらこのモデルをチャットbotにして、VR空間で使用できるようにしたい
                          </AccordionPanel>
                          </AccordionItem>
                </Accordion>
                
      </TabPanel>

    </TabPanels>
  </Tabs>
  </>
  );
}

