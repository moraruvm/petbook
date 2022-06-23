import { Box, Card, CardContent, Rating, Stack, Typography } from "@mui/material";
import Pet from "../common/model/Pet";

const FeedItem = (props: Props) => {
    const pet = props.pet
    return (
        <Card>
            <CardContent>
                <Stack spacing={1} alignItems='center'>
                    <Typography align="center">{pet.name}</Typography>
                    <Box sx={{ cursor: 'pointer' }}>
                        <img alt={pet.name} src={pet.imageUrl} height="164px" onClick={() => console.log("shazaam")}></img>
                    </Box>
                    <Rating value={pet.rating} readOnly precision={.1} />
                </Stack>
            </CardContent>
        </Card>
    )
}

export default FeedItem;

interface Props {
    pet: Pet
}