import { Box, Grid } from "@mui/material"
import Pet from "../common/model/Pet";
import FeedItem from "./feedItem";

const Feed = (props: Props) => {

    const PetItem = (pet: Pet) => (<Grid item><FeedItem pet={pet} /></Grid>)

    return (
        <Box mt={2}>
            <Grid container spacing={4} justifyContent="space-evenly">
                {props.pets.map(PetItem)}
            </Grid>
        </Box>
    )
}

export default Feed;

interface Props {
    pets: Array<Pet>
}