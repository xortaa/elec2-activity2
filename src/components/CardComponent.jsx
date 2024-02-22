import { Card, CardBody, CardFooter, Button, Image, Stack, Heading, Text, Divider, ButtonGroup } from "@chakra-ui/react"
import { useState } from "react"
import { useToast } from "@chakra-ui/react"

const CardComponent = ({name, description, price, stock, image, alt}) => {
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
        title: "Added to cart",
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
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={image}
          alt={alt}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text>
            {description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            P{price}
          </Text>
          <Text>Stock: {currentStock}</Text>
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
