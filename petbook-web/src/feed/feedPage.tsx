import { Box, Grid, Skeleton } from "@mui/material"
import { useEffect, useState } from "react";
import Pet from "../common/model/Pet";
import Api from "../service/petApi";
import FeedItem from "./feedItem";
import LoadingItem from "./loadingItem";

const Feed = (props: Props) => {

    const [loading, setLoading] = useState(true)
    const [feed, setFeed] = useState<Array<Pet>>([])

    useEffect(() => {
        Api.getFeed().then(feedItems => {
            setFeed(feedItems)
        }).finally(() => setLoading(false))
    }, [])

    const PetItem = (pet: Pet) => (<Grid item key={pet.id}><FeedItem pet={pet} /></Grid>)
    const LoadingState = () => (<>{[...Array(12)].map(_ => <Grid item><LoadingItem/></Grid>)}</>)

    return (
        <Box mt={2}>
            <Grid container spacing={4} justifyContent="space-evenly">
                {loading ? <LoadingState /> : feed.map(PetItem)}
            </Grid>
        </Box>
    )
}

export default Feed;

interface Props {
}