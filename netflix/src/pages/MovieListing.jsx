import { Typography, Card, CardActionArea, CardContent, CardMedia, Container} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const MovieListing = ({movie}) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: '250px', height:'300px', display: 'flex', flexDirection: 'column' }}>
            <CardActionArea 
                style={{ flex: '1' }}
                onClick={() => 
                    navigate(`/about/${movie.imdbID}`)
                }
            >
                <CardMedia
                    component="img"
                    height="150"
                    image= {movie.Poster !== "N/A" ? movie.Poster : "https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design-1024x512.png.webp"}
                    alt={movie.Title}
                    sx = {{
                        objectFit:'contain'
                    }}
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div" align='center'>
                    {movie.Title}
                </Typography>
                <Container className="movieCard" sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="body2" sx={{ marginRight:'6px', textTransform:'capitalize' }} color="text.secondary">
                    {movie.Type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {movie.Year}
                    </Typography>
                </Container>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MovieListing;