import { Grid } from "@chakra-ui/react"
import ListCardComponent from "./ListCardComponent"

const ListView = () => {
  return (
    <div>
      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
        <ListCardComponent />
        <ListCardComponent />
        <ListCardComponent />
        <ListCardComponent />
        <ListCardComponent />
        <ListCardComponent />
        <ListCardComponent />
        <ListCardComponent />
        <ListCardComponent />
        <ListCardComponent />
      </Grid>
    </div>
  )
}
export default ListView
