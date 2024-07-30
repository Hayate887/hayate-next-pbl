import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
  Box,
  Button,
  Center,
  Divider,
  Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,
  Heading,
  Spacer,
  Tab, TabList, TabPanel, TabPanels, Tabs,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import Link from "next/link";

export default function Japanese() {

  const {getDisclosureProps, getButtonProps}=useDisclosure()
  const {isOpen, onOpen, onClose}=useDisclosure()
  
  const buttonProps=getButtonProps()
  const disclosureProps=getDisclosureProps()

  return (
  <>
  <Box p={5}>
      <Button position="absolute" top='5' right="5" onClick={onOpen}>
      <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
      <DrawerCloseButton/>
        <DrawerHeader>メニュー</DrawerHeader>
        <DrawerBody>
      <Link href='setting' target='_blank'>
         ログイン画面に戻る
     </Link>
     </DrawerBody>
     </DrawerContent>
    </Drawer>
      </Box>

  
    <Center>
    <Heading as='h1' size='2xl' mb={10}>hayateのページへようこそ！</Heading>
    </Center>
    <Tabs isFitted>
    <TabList>
      <Tab>hayateについて</Tab>
      <Tab>研究について</Tab>
    </TabList>
   
    <TabPanels>
      <TabPanel>
      <Text fontSize='2xl'><b>名前</b> : hayate</Text>
      <Spacer />
      <Text fontSize='2xl'><b>年齢</b> : 20</Text>
      <Text fontSize='2xl'><b>趣味</b> : ちいかわ</Text>
      <Text fontSize='2xl' mb={5}><b>最近ハマっている事</b> : ガチャガチャ</Text>
      <Button {...buttonProps} mb={4} p={4}>ガチャガチャ</Button>
      <Text {...disclosureProps} mb={4}>獲得したグッズ</Text>
      </TabPanel>
   
      <TabPanel>  
        <Accordion defaultIndex={[-1]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  <b>研究テーマ</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
              <AccordionPanel pb={4}>
              2段階ファインチューニングによる個性抽出手法
              </AccordionPanel>
          </AccordionItem>
         
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  <b>目的</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
              <AccordionPanel pb={4}>
                より精度が高く、より人間らしい文章を生成する個性抽出モデルを作成する
              </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                <b>方法</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
             </h2>
            <AccordionPanel pb={4}>
                          <Text>1. 青空文庫で公開されている個性を抽出したい作家と同時代かそれ以前に活躍した作家の作品を、事前学習済みモデルでファインチューニングを行う</Text>
                          <Divider/>
                          <p>2. 個性を抽出したい作家の全作品（パブリックドメイン）を、事前学習済みモデルと1で作成したモデルでそれぞれファインチューニングを行う</p>
                          <Divider/>
                          <Text>3. それぞれのモデルの性能評価を行う</Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='left'>
                      <b>現在の進捗</b>
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                         ・データセット構築の途中
                         <p>・3年生終了時までには少なくとも一人、データセットの構築を終わらせて性能評価まで行いたい</p>
                          </AccordionPanel>
                          </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='left'>
                      <b>最終目標</b>
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                         いい結果が出たらこのモデルをチャットbotにして、VR空間で使用できるアプリケーションのようにしたい
                          </AccordionPanel>
                          </AccordionItem>
        </Accordion>
        </TabPanel>
      </TabPanels>
  </Tabs>
  </>
  );
}
