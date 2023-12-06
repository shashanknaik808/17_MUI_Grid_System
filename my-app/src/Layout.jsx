import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from '@mui/material';

function Layout() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="/images/igneel.jpg"
                                alt="Fire Dragon King 'IGNEEL'"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    IGNEEL
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Igneel is a male fire dragon and the adoptive father of Dragon Slayer Natsu Dragneel, a wizard of the guild Fairy Tail. He is the king of the Fire Dragons and a friend of fellow fire dragon Atlas Flame. He was also the biological father of Ignia, the Fire God Dragon.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={3} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="/images/igneel.jpg"
                                alt="Fire Dragon King 'IGNEEL'"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    IGNEEL
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Igneel is a male fire dragon and the adoptive father of Dragon Slayer Natsu Dragneel, a wizard of the guild Fairy Tail. He is the king of the Fire Dragons and a friend of fellow fire dragon Atlas Flame. He was also the biological father of Ignia, the Fire God Dragon.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={3} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="/images/igneel.jpg"
                                alt="Fire Dragon King 'IGNEEL'"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    IGNEEL
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Igneel is a male fire dragon and the adoptive father of Dragon Slayer Natsu Dragneel, a wizard of the guild Fairy Tail. He is the king of the Fire Dragons and a friend of fellow fire dragon Atlas Flame. He was also the biological father of Ignia, the Fire God Dragon.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={3} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="/images/igneel.jpg"
                                alt="Fire Dragon King 'IGNEEL'"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    IGNEEL
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Igneel is a male fire dragon and the adoptive father of Dragon Slayer Natsu Dragneel, a wizard of the guild Fairy Tail. He is the king of the Fire Dragons and a friend of fellow fire dragon Atlas Flame. He was also the biological father of Ignia, the Fire God Dragon.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </div>
    )
}

export default Layout;