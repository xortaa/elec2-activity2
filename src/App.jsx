import "./App.css"
import GridView from "./components/GridView"
import ListView from "./components/ListView"
import { Box, Stack, Button, Heading, Flex } from "@chakra-ui/react"
import { useState } from "react"
import Logo from "./assets/ikea9726.jpg"

function App() {
  const [view, setView] = useState("grid")

  return (
    <Box p='5' m='5'>
      <Flex alignItems='center' gap={5}>
        <img src={Logo} alt='logo' width={100} height={100} />
        <Heading>Ikea Furniture Store</Heading>
      </Flex>
      <Stack direction='row' spacing='6' mb='6' justifyContent='flex-end'>
        <Button onClick={() => setView("list")} variant='outline' colorScheme='teal' w={150}>
          List
        </Button>
        <Button onClick={() => setView("grid")} variant='outline' colorScheme='teal' w={150}>
          Grid
        </Button>
      </Stack>
      {view === "grid" ? <GridView /> : <ListView />}
    </Box>
  )
}

export default App
