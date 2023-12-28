import React from 'react';
import { IconButton, Box, TextField, Typography, AppBar, Grid, Toolbar, Container} from '@mui/material'
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MovieListing from './MovieListing';
import { useEffect } from 'react';
import { useState } from 'react';

let API = "http://www.omdbapi.com/?i=tt3896198&apikey=75004bde"

const App = () => {
    // by default there are no movies in the movies array
    const [movies, setMovies] = useState([]);
    // by default the search term is empty
    const [searchTerm, setsearchterm] = useState('');

    const getMovies = async(title) => {
        try {
            console.log("\nfrom getMovies =>"+title);
            const response = await fetch(`${API}&s=${title}`);
            const data = await response.json();
            console.log("data => ",data);
            if (data.Search) {
                console.log("\n list of movies =>", data.Search);
                setMovies(data.Search);
                console.log("fetching the movies",movies);
            } else {
                setMovies([]); // Set movies to an empty array if there's no valid Search property
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setMovies([]); // Set movies to an empty array in case of an error
        }
    }

    useEffect(() => {
        getMovies('Ironman');
    },[]);
    // nothing in dependency array so it will only get called once

    return (
      <div className="App">
        <>
            <AppBar position='relative'>
                <Toolbar>
                    <MovieOutlinedIcon />
                    <Typography variant='h5'>
                        &nbsp; Netflix
                    </Typography>
                </Toolbar>
            </AppBar>
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
                            alignItems: 'center', // Center vertically
                            justifyContent: 'center', // Center horizontally
                            gap: 1, // Adjust the gap between the icon and the TextField
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
                            ))
                        }
                    </Grid>
                </Container>
            </main>
        </>
      </div>
    );
  }
  
export default App;