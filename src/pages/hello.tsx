import { Button } from '@chakra-ui/react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (<>
    <h1>Hello!</h1>
<Button colorScheme='blue'>Button</Button>
</>
  );
}
