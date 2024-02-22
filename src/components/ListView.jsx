import { Grid } from "@chakra-ui/react"
import ListCardComponent from "./ListCardComponent"
import furniture from "../../furniture.json"

const ListView = () => {
  
  return (
    <div>
      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
        {furniture.map((item, index) => (
          <ListCardComponent key={index} name={item.name} description={item.description} price={item.price} stock={item.stock} image={item.imageUrl} alt={item.alt}/>
        ))}
      </Grid>
    </div>
  )
}
export default ListView
