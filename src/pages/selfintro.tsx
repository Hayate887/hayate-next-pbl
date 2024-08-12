import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
  Box,
  Button,
  Center,
  Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,
  Heading,
  ListItem,
  Tab,
  Table, TableContainer,
  TabList, TabPanel, TabPanels, Tabs,
  Tbody, Td,
  Text,
  Th,
  Thead, Tr,
  UnorderedList,
  useColorMode, useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import Link from "next/link";
import { useState } from 'react';



export default function Japanese() {

  const {isOpen, onOpen, onClose}=useDisclosure();
  const [isRequired, setRequired] = useState(true);

  const {toggleColorMode}=useColorMode();

  const [language, setLanguage] = useState('ja');

  const bgcolor1=useColorModeValue('pink.500', 'cyan.600')
  const bgcolor2=useColorModeValue('teal.600', 'red.300')
  const bgcolor3=useColorModeValue('black', 'BlackAlpha.500')
  const bgcolor4=useColorModeValue('white', 'black')


  const handleScreenChange = () => {
    setRequired(!isRequired)
  };
  
  const handleLanguageChange = () => {
    setLanguage(language == 'ja' ? 'en' : 'ja');
  };

  return (
  <>
  {isRequired ? (
    <> 
    <Box bg='white' minHeight='100vh'>
    <Button position="absolute" top='5' right="5" onClick={onOpen}>
      <HamburgerIcon color={bgcolor1}/>
    </Button>
    
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bgColor={bgcolor1}>
        <DrawerCloseButton color={bgcolor4}/>
        <DrawerHeader mb={5} color={bgcolor4}>{language == 'ja' ? 'メニュー' : 'Menu'}</DrawerHeader>
        <DrawerBody>
          <UnorderedList>
            <ListItem color={bgcolor4}>
              <Link href='home' target='_blank'>
              <Text mb={4} color={bgcolor4}>{language == 'ja' ? 'ホーム画面に戻る' : 'Back to the Home screen'}</Text>
              </Link>
            </ListItem>
            <ListItem color={bgcolor4}>
              <Button onClick={handleLanguageChange} variant='link' color={bgcolor4}> 
                <Text mb={4} color={bgcolor4}>{language == 'ja' ? 'English' : '日本語'}</Text>
              </Button>
            </ListItem>
            <ListItem color={bgcolor4}>
              <Button onClick={toggleColorMode} variant='link' color={bgcolor4}> 
                <Text mb={4} color={bgcolor4}>{language == 'ja' ? '色を変える' : 'Change the color'}</Text>
              </Button>
            </ListItem>
          </UnorderedList>      
        </DrawerBody>
      </DrawerContent>
    </Drawer>

      <Box p={10}>
        <Center>
          {language=='ja' ? <Button onClick={handleScreenChange} variant='link' color='white'><Heading as='h1' size='2xl' color='black'>ようこそ！</Heading></Button>:<Button onClick={handleScreenChange} variant='link' color='white'><Heading as='h1' size='2xl' color='black'>Welcome!</Heading></Button>}
        </Center>
      </Box>
      
      <Tabs isFitted>
        <TabList>
          {language=='ja' ? <Tab fontSize='lg' color={bgcolor2}>hayateについて</Tab> : <Tab fontSize='lg' color={bgcolor2}>About me</Tab>}
        </TabList>
        
        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Table variant='simple' p={10} color='black'>
                <Thead>
                  <Tr>
                    {language=='ja' ? <Th color={bgcolor1}>名前</Th> : <Th color={bgcolor1}>Name</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td color={bgcolor3}>hayate</Td>
                  </Tr>
                </Tbody>
                <Thead>
                  <Tr>
                    {language=='ja' ? <Th color={bgcolor1}>年齢</Th> : <Th color={bgcolor1}>Age</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td color={bgcolor3}>20</Td>
                  </Tr>
                </Tbody>
                <Thead>
                  <Tr>
                    {language=='ja' ? <Th color={bgcolor1}>学年</Th> : <Th color={bgcolor1}>Grade</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td color={bgcolor3}>B3</Td>
                  </Tr>
                </Tbody>
                <Thead>
                  <Tr>
                    {language=='ja' ? <Th color={bgcolor1}>気になっている研究班</Th> : <Th color={bgcolor1}>Research Groups of Interest</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    {language=='ja' ? <Td color={bgcolor3}>NLP班</Td> : <Td color={bgcolor3}>NLP groups</Td>}
                  </Tr>
                </Tbody>
                <Thead>
                  <Tr>
                    {language=='ja' ? <Th color={bgcolor1}>一言</Th> : <Th color={bgcolor1}>last message</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    {language=='ja' ? <Td color={bgcolor3}>よろしくお願いします！</Td> : <Td color={bgcolor3}>Nice to meet you！</Td>}
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
    </>
  ):
  (
  <>
  <Box bg='black' minHeight='100vh'>
    <Button position="absolute" top='5' right="5" onClick={onOpen}>
      <HamburgerIcon />
    </Button>
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bgColor={bgcolor1}>
        <DrawerCloseButton color={bgcolor4}/>
        <DrawerHeader mb={5} color={bgcolor4}>{language == 'ja' ? 'メニュー' : 'Menu'}</DrawerHeader>
        <DrawerBody>
          <UnorderedList>
            <ListItem color={bgcolor4}>
              <Link href='home' target='_blank'>
              <Text mb={4} color={bgcolor4}>{language == 'ja' ? 'ホーム画面に戻る' : 'Back to the Home screen'}</Text>
              </Link>
            </ListItem>
            <ListItem color={bgcolor4}>
              <Button onClick={handleLanguageChange} variant='link' color={bgcolor4}> 
                <Text mb={4} color={bgcolor4}>{language == 'ja' ? 'English' : '日本語'}</Text>
              </Button>
            </ListItem>
          </UnorderedList>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    
    <Box p={10}>
      <Center>
        <Button onClick={handleScreenChange} variant='link' color="black"><Heading as='h1' size='2xl' color="red">*****</Heading></Button>
      </Center>
    </Box>
    
    <Tabs colorScheme="white" isFitted>
      <TabList>
        {language=='ja' ? <Tab _selected={{color: 'black', bg: 'white'}} color='white'>hayateについて</Tab> : <Tab _selected={{color: 'black', bg: 'white'}} color='white'>About me</Tab>}
        {language=='ja' ? <Tab _selected={{color: 'black', bg: 'white'}} color='white'>研究について</Tab> : <Tab _selected={{color: 'black', bg: 'white'}} color='white'>About my research</Tab>}
      </TabList>

      <TabPanels>
        <TabPanel>
          <TableContainer>
            <Table variant='simple' p={10}>
              <Thead>
                <Tr>
                  {language=='ja' ? <Th color="cyan" fontSize='md'>名前</Th> : <Th color="cyan" fontSize='md'>Name</Th>}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  {language=='ja' ? <Td color='white' fontSize='lg'>hayate（うさぎでも可）</Td> : <Td color='white' fontSize='lg'>hayate（うさぎ）</Td>}
                </Tr>
              </Tbody>
              <Thead>
                <Tr>
                  {language=='ja' ? <Th color="cyan" fontSize='md'>所属研究室(学部)</Th> : <Th color="cyan" fontSize='md'>Affiliated Laboratory</Th>}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  {language=='ja' ? <Td color='white' fontSize='lg'>彌富研究室</Td> : <Td color='white' fontSize='lg'>Iyatomi lab</Td>}
                </Tr>
              </Tbody>
              <Thead>
                <Tr>
                  {language=='ja' ? <Th color="cyan" fontSize='md'>大学院への進学</Th> : <Th  color="cyan" fontSize='md'>Entering Graduate School</Th>}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  {language=='ja' ? <Td color='white' fontSize='lg'>進学予定（研究室未定）</Td> : <Td color='white' fontSize='lg'>Considering going to graduate school（Undecided the laboratory）</Td>}
                </Tr>
              </Tbody>
              <Thead>
                <Tr>
                  {language=='ja' ?  <Th color="cyan" fontSize='md'>趣味</Th> : <Th color="cyan" fontSize='md'>Hobby</Th>}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  {language=='ja' ? <Td color='white' fontSize='lg'>ちいかわ</Td> : <Td color='white' fontSize='lg'>Chii-kawa</Td>}
                </Tr>
              </Tbody>
              <Thead>
                <Tr>
                  {language=='ja' ? <Th color="cyan" fontSize='md'>最近ハマっている事</Th> : <Th color="cyan" fontSize='md'>The thing what I&apos;m into</Th>}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize='lg'>
                    <UnorderedList>
                      <ListItem color='whitesmoke'>
                        {language=='ja' ? <Text mb={4}>昔聴いてた曲を聴く</Text> : <Text mb={4}>Listen to songs that I used to listen</Text>}
                        </ListItem>
                        <ListItem color='whitesmoke'>
                          {language=='ja' ? <Text>ガチャガチャ</Text>: <Text>capsule toys</Text>}
                        </ListItem>
                    </UnorderedList>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </TabPanel>
        
        <TabPanel p={50}>
          <Accordion defaultIndex={[-1]} allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  {language=='ja' ? <Text color='pink'><b>研究テーマ</b></Text> : <Text color='pink'><b>Theme</b></Text>}
                </Box>
                <AccordionIcon color='white'/>
              </AccordionButton>
              <AccordionPanel pb={4}>
                {language=='ja' ? <Text color='white'>2段階ファインチューニングによる個性抽出手法</Text> : <Text color='white'>Individuality Extraction Method by Two-Step Fine Tuning</Text>}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    {language=='ja' ? <Text color='pink'><b>目的</b></Text> : <Text color='pink'><b>Purpose</b></Text>}
                  </Box>
                  <AccordionIcon color='white'/>
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {language=='ja' ? <Text color='white'>より精度が高く、より人間らしい文章を生成する個性抽出モデルを作成する</Text> : <Text color='white'>Create a personality extraction model that generates more accurate and more human-like sentences</Text>}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    {language=='ja' ? <Text color='pink'><b>方法</b></Text> : <Text color='pink'><b>Method</b></Text>}
                  </Box>
                  <AccordionIcon color='white'/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {language=='ja' ? <Text mb={4} color='white'>1. 青空文庫で公開されている個性を抽出したい作家と同時代かそれ以前に活躍した作家の作品を、事前学習済みモデルでファインチューニングを行う</Text> : <Text mb={4} color='white'>1. Fine-tune the works of authors who were active in the same period or earlier than the author whose individuality you wish to extract from the Aozora Bunko using a pre-trained morel</Text>}
                {language=='ja' ? <Text mb={4} color='white'>2. 個性を抽出したい作家の全作品（パブリックドメイン）を、事前学習済みモデルと1で作成したモデルでそれぞれファインチューニングを行う</Text> : <Text mb={4} color='white'>2. Fine-tune all works (public domain) of the artist whose personality you want to extract, using the pre-trained model and the model created in 1, respectively</Text>}
                {language=='ja' ? <Text color='white'>3. それぞれのモデルの性能評価を行う</Text> : <Text color='white'>3. Evaluate the performance of each model</Text>}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    {language=='ja' ? <Text color='pink'><b>2024/8/8 進捗</b></Text>: <Text color='pink'><b>Progress in August 8</b></Text>}
                  </Box>
                  <AccordionIcon color='white'/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {language=='ja' ? <Text mb={2} color='white'>データセット構築の途中</Text>:<Text mb={2} color='white'>Dataset construction in progress</Text>}
                {language=='ja' ? <Text color='white'>3年生終了時までには少なくとも一人、データセットの構築を終わらせて性能評価まで行いたい</Text> : <Text color='white'>I would like to have at least one person build a data set and evaluate its performance by the end of the third year</Text>}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    {language=='ja' ? <Text color='pink'><b>最終目標</b></Text> : <Text color='pink'><b>Final goal</b></Text>}
                  </Box>
                  <AccordionIcon color='white'/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {language=='ja' ? <Text color='white'>いい結果が出たらこのモデルをチャットbotにして、VR空間で使用できるアプリケーションのようにしたい</Text> : <Text color='white'>If I get good results, I want to turn this model into a chat bot, like an application that can be used in VR space</Text>}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </TabPanel>   
      </TabPanels>
    </Tabs>
  </Box>
  </>)}
</>);
}