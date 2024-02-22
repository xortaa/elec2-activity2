import { Card, CardBody, CardFooter, Button, Image, Stack, Heading, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useToast } from "@chakra-ui/react"

const ListCardComponent = () => {
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
    <Card direction={{ base: "column", sm: "row" }} overflow='hidden' variant='outline'>
      <Image
        objectFit='cover'
        maxW={{ base: "100%", sm: "200px" }}
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>Living room Sofa</Heading>

          <Text py='2'>
            This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people
            who love a chic design with a sprinkle of vintage design.
          </Text>

          <Text>Stock: {stock}</Text>
        </CardBody>

        <CardFooter>
          <Stack direction='row' gap={3}>
            <Button variant='solid' colorScheme='teal' size='sm' onClick={addToCart}>
              Add to Cart
            </Button>
            <Button variant='ghost' colorScheme='teal' size='sm' onClick={addToFavorites}>
              Add to Favorites
            </Button>
          </Stack>
        </CardFooter>
      </Stack>
    </Card>
  )
}
export default ListCardComponent
