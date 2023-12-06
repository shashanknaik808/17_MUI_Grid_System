import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Grid,
    Typography
} from '@mui/material';

function Layout() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards were a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="primary">
                                Shared
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Layout;