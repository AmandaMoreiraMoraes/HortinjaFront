
import { ChakraProvider } from "@chakra-ui/react"
import {Home} from './pages'

function App() {
  return (
    <ChakraProvider>
      <Home></Home>
    </ChakraProvider>
  );
}

export default App;
