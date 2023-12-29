//importing dependencies
import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieListing from "./MovieListing";
import { Typography, Grid, Container} from '@mui/material'

//OMBD API Key
let APIKEY = "75004bde";
let URL = "http://www.omdbapi.com/?";

//defining the react component
const AboutMovie = () => {
    //fetching the route paramter with the help of useParams hook
    const { id } = useParams();
    //defining the loader function with the help of useLoaderData hook 
    const movieDetails = useLoaderData();
    
    // by default there are no movies in the movies array
    const [relatedMovies, setrelatedMovies] = useState([]);
    // fetch related movies with the help of the IMDb ID and the movie title
    const fetchRelatedMovies = async() => {
        try {
            let API = "http://www.omdbapi.com/?i=";
            const response = await fetch(API+`${id}&apikey=${APIKEY}&s=${movieDetails.Title}`);
            const data = await response.json();
            if (data.Search) {
                setrelatedMovies(data.Search);
            } else {
                setrelatedMovies([]); 
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setrelatedMovies([]); 
        }
    }
    
    //defining the useEffect hook for this component
    //it fetches the related movies when the AboutMovie component loads
    useEffect(() => {
        fetchRelatedMovies();
    },[]);

    return(
        <>
            <main>
                <Container sx={{
                    marginTop:"20px",
                    display:"flex",
                    flexDirection:"row",
                    gap: "20px", 
                    justifyContent:"flex-start",
                    paddingLeft:5,
                    paddingRight:5,
                    '@media screen and (max-width: 550px)': {
                        flexDirection: "column", 
                        alignItems:"center",
                    }
                }}
                maxWidth="xl">
                    <img 
                        height="400px"
                        src={movieDetails.Poster !== "N/A" ? movieDetails.Poster : "https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design-1024x512.png.webp"}
                        alt={movieDetails.Title}
                        sx = {{
                            objectFit:'cover',
                        }}
                        className="movie-poster"
                    />
                    <div className="movie-details">
                        <Typography variant="h3">
                            {movieDetails.Title}
                        </Typography>
                        <Typography>
                            Year Released: {movieDetails.Released} &nbsp; Genre:{movieDetails.Genre} 
                        </Typography>
                        <Typography>
                            Language: {movieDetails.Language} &nbsp; Country: {movieDetails.Country} &nbsp; RunTime: {movieDetails.Runtime}
                        </Typography>
                        <Typography>
                            Director: {movieDetails.Director}
                        </Typography>
                        <Typography>
                            Actors: {movieDetails.Actors}
                        </Typography>
                        <Typography>
                            Writer: {movieDetails.Writer}
                        </Typography>
                        <Typography>
                            IMDb Rating: {movieDetails.imdbRating}
                        </Typography>
                        <br />
                        <Typography paragraph>
                            About the movie: {movieDetails.Plot}
                        </Typography>
                    </div>
                </Container>
                <br /><br />
                <Container className="container-related-movies" maxWidth="md" align="center">
                    <Typography variant="h5">
                        Browse other related movies
                    </Typography>
                    <br /><br />
                    <Grid container spacing={4}>
                        {
                            relatedMovies.map((movie) => (
                                //taking full width i.e. 12 on mobile devices (xs={12})
                                //taking half width i.e. 6 on medium devices
                                //taking less width i.e. 4 on larger devices
                                <Grid item key={movie} xs={12} sm={6} md={4}>
                                    <MovieListing className="movie-listing" movie={movie}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </main>
        </>
    );
}

// loader function
export const movieDetailsLoader = async ({params}) => {
    const { id } = params;
    let endpoint = URL + `i=${id}&apikey=${APIKEY}&plot=full`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
};

export default AboutMovie;