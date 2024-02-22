import { Card, CardBody, CardFooter, Button, Image, Stack, Heading, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useToast } from "@chakra-ui/react"

const ListCardComponent = ({ name, description, price, stock, image, alt }) => {
  const [currentStock, setStock] = useState(stock)
  const toast = useToast()
  function addToCart() {
    setStock(currentStock - 1)
    if (currentStock === 1) {
      toast({
        title: "Item out of stock",
        description: `${name} is out of stock`,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    } else {
      toast({
        title: `Added to cart`,
        description: `${name} has been added to cart`,
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    }
  }

  function addToFavorites() {
    toast({
      title: "Added to favorites",
      description: `${name} has been added to favorites`,
      status: "success",
      duration: 9000,
      isClosable: true,
    })
  }
  return (
    <Card direction={{ base: "column", sm: "row" }} overflow='hidden' variant='outline'>
      <Image objectFit='cover' maxW={{ base: "100%", sm: "200px" }} src={image} alt={alt} />

      <Stack>
        <CardBody>
          <Heading size='md'>{name}</Heading>

          <Text py='2'>{description}</Text>
          <Text py='2'>P{price}</Text>

          <Text>Stock: {currentStock}</Text>
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
