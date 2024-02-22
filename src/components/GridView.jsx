import { Grid } from "@chakra-ui/react"
import CardComponent from "./CardComponent"
import furniture from "../../furniture.json"

const GridView = () => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
      {furniture.map((item, index) => (
        <CardComponent
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
          stock={item.stock}
          image={item.imageUrl}
          alt={item.alt}
        />
      ))}
    </Grid>
  )
}
export default GridView
