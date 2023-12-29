import { IconButton, Box, TextField, Typography, Grid, Container} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MovieListing from './MovieListing';
import { useEffect, useState } from 'react';

let API = "http://www.omdbapi.com/?i=tt3896198&apikey=75004bde";

const Home = () => {
    // by default there are no movies in the movies array
    const [movies, setMovies] = useState([]);
    // by default the search term is empty
    const [searchTerm, setsearchterm] = useState('');

    // async function to get movies
    const getMovies = async(title) => {
        try {
            const response = await fetch(`${API}&s=${title}`);
            const data = await response.json();
            if (data.Search) {
                setMovies(data.Search);
            } else {
                setMovies([]); 
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setMovies([]); 
        }
    }

    // defining the useEffect for this react component where it will get executed when the Home component loads
    useEffect(() => {
        getMovies('Batman');
    },[]);
    // nothing in dependency array so it will only get called once

    return (
      <div className="App">
        <>
            <main>
                <div>
                    <Container maxWidth='sm'>
                        <Typography variant='h3' align='center' color='textPrimary' gutterBottom>
                            NETFLIX
                        </Typography>
                        <br />
                        <Typography align='center' color='textPrimary' paragraph>
                        Welcome to the ultimate cinematic experience! Dive into a world of thrilling stories and unforgettable moments with our carefully curated movie selection. Whether you're in the mood for heart-pounding action, gut-wrenching drama, laugh-out-loud comedy, or spine-tingling suspense, we have something for every movie enthusiast. Explore the latest blockbusters and hidden gems, spanning genres and cultures, all conveniently at your fingertips!
                        </Typography>
                    </Container>
                    <br />
                    <Container>
                        <Box
                            sx={{
                            display: 'flex',
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: 1, 
                            }}
                        >
                            
                            <TextField
                                id="input-with-sx"
                                label="Search Movies"
                                variant="standard"
                                size="large"
                                sx={{ width: '500px' }}
                                onChange={(e) => {
                                    setsearchterm(e.target.value);
                                    console.log("from onChange"+searchTerm);
                                }}
                            />
                            <IconButton onClick={() => getMovies(searchTerm)}>
                                <SearchOutlinedIcon sx={{ marginTop: '20px' }}/>
                            </IconButton>
                        </Box>
                    </Container>
                    <br />
                </div>
                <Container maxWidth="md" align="center">
                    <br /><br />
                    <Grid container spacing={4}>
                        {
                            movies.map((movie) => (
                                //taking full width i.e. 12 on mobile devices (xs={12})
                                //taking half width i.e. 6 on medium devices
                                //taking less width i.e. 4 on larger devices
                                <Grid item key={movie} xs={12} sm={6} md={4}>
                                    <MovieListing movie={movie}/>
                                </Grid>
                                // we need to return the components so use () insted of {}
                            ))
                        }
                    </Grid>
                </Container>
            </main>
        </>
      </div>
    );
  }
  
export default Home;