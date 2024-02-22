import { Grid } from "@chakra-ui/react"
import CardComponent from "./CardComponent"

const GridView = () => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </Grid>
  )
}
export default GridView
