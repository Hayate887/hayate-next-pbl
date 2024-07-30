import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
  Box,
  Button,
  Center,
  Divider,
  Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,
  Heading,
  Tab, TabList, TabPanel, TabPanels, Tabs,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import Link from "next/link";

export default function English() {
  const {isOpen, onOpen, onClose}=useDisclosure()
  
  return (<>
  <Box p={5}>
  <Button position="absolute" top='5' right="5" onClick={onOpen}>
      <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
      <DrawerCloseButton/>
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
      <Link href='setting' target='_blank'>
         Back to Sign-in page
     </Link>
     </DrawerBody>
     </DrawerContent>
    </Drawer>
  </Box>
  
  <Box p={2} mb={4}>
    <Center>
      <Heading as='h1'>Welcome to hayate&apos;s page!</Heading>
    </Center>
  </Box>

  <Tabs isFitted>
    <TabList>
      <Tab>About me</Tab>
      <Tab>About my research theme</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <h2><b>Name</b> : hayate</h2>
        <h2><b>Age</b> : 20</h2>
        <h2><b>Hobby</b> : Chii-kawa</h2>
        <h2><b>The thing what I'm into</b> : capsule toys</h2>
      </TabPanel>

      <TabPanel>
        <Accordion defaultIndex={[-1]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Theme
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
              <AccordionPanel pb={4}>
              2段階ファインチューニングによる個性抽出手法の提案
              </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Purpose
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
                  Method
                </Box>
                <AccordionIcon />
              </AccordionButton>
             </h2>
            <AccordionPanel pb={4}>
            <Text>1. 青空文庫で公開されている個性を抽出したい作家と同時代に活躍した作家の作品を、事前学習済みモデルでファインチューニングを行う</Text>
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
                  Progress in July 26
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
                        Final goal
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

