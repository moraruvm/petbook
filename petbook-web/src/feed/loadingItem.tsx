import { Box, Card, CardContent, Rating, Skeleton, Stack, Typography } from "@mui/material";
import Pet from "../common/model/Pet";

const LoadingItem = () => {
    return (
        <Card>
            <CardContent>
                <Stack spacing={1} alignItems='center'>
                    <Skeleton variant="text" width={200}/>
                    <Skeleton variant="rectangular" height={164} width={200}></Skeleton>
                    <Skeleton variant="text" width={200}/>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default LoadingItem;