import { Outlet } from "react-router-dom"; 
import { Typography, AppBar, Toolbar} from '@mui/material'
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import { useNavigate } from 'react-router-dom';


const RootLayout = () => {
    const navigate = useNavigate();
    return(
        //displaying the navbar
        <>
            <AppBar position='relative'>
                <Toolbar sx={{cursor:"pointer"}}>
                    <MovieOutlinedIcon onClick={() => 
                        navigate(`/`)
                    }/>
                    <Typography variant='h5' onClick={() => 
                        navigate(`/`)
                    }>
                        &nbsp; Netflix
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;