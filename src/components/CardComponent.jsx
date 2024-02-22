import { Card, CardBody, CardFooter, Button, Image, Stack, Heading, Text, Divider, ButtonGroup } from "@chakra-ui/react"
import { useState } from "react"
import { useToast } from "@chakra-ui/react"

const CardComponent = () => {
  const [stock, setStock] = useState(10)
  const toast = useToast()
  function addToCart() {
    setStock(stock - 1)
    if (stock === 1) {
      toast({
        title: "Item out of stock",
        description: "Item is out of stock",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    } else {
      toast({
        title: "Added to cart",
        description: "Item has been added to cart",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    }
  }

  function addToFavorites() { 
    toast({
      title: "Added to favorites",
      description: "Item has been added to favorites",
      status: "success",
      duration: 9000,
      isClosable: true,
    })
  }
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people
            who love a chic design with a sprinkle of vintage design.
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            $450
          </Text>
          <Text>Stock: {stock}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='teal' size='sm' onClick={addToCart}>
            Add to Cart
          </Button>
          <Button variant='ghost' colorScheme='teal' size='sm' onClick={addToFavorites}>
            Add to Favorites
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
export default CardComponent
