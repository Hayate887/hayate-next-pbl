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
        <Link href='setting' target='_blank'>Back to Sign-in page</Link>
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
              Individuality Extraction Method by Two-Step Fine Tuning
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
                Create a personality extraction model that generates more accurate and more human-like sentences
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
              <Text>1. Fine-tune the works of authors who were active in the same period or earlier than the author whose individuality you wish to extract from the Aozora Bunko using a pre-trained morel</Text>
              <Divider/>
              <p>2. Fine-tune all works (public domain) of the artist whose personality you want to extract, using the pre-trained model and the model created in 1, respectively</p>
              <Divider/>
              <Text>3. Evaluate the performance of each model</Text>
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
            ・Dataset construction in progress
            <p>・I would like to have at least one person build a data set and evaluate its performance by the end of the third year</p>
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
                         If I get good results, we want to turn this model into a chat bot, like an application that can be used in VR space.
                          </AccordionPanel>
                          </AccordionItem>
        </Accordion>
      </TabPanel>
    </TabPanels>
  </Tabs>
  </>
  );
}

