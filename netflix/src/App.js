//importing the router dependencies
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

//importing pages and components
import Home from './pages/Home';
import AboutMovie from './pages/AboutMovie';

//importing layouts
import RootLayout from './layouts/RootLayout';
import { movieDetailsLoader } from './pages/AboutMovie';

//importing other dependencies
import './app.css'

//creating the app router
const router = createBrowserRouter(
    createRoutesFromElements(
        //defining the base route i.e '/'
        // we have to wrap the route inside the base route
        // i.e. about/:id would be interpreted as localhost/about/:id
        <Route path='/' element={ <RootLayout/> }>
            {/* index element means it's the default route */}
            <Route index element = { <Home /> } />
            <Route path='about/:id' element = { <AboutMovie /> } loader={ movieDetailsLoader }/>
        </Route>
    )
)

//creating the application
const App = () => {
    document.title = 'Netflix';
    return (
        //initialising the router here
        
        <RouterProvider router={router} />
    );
};

//exporting the application
export default App;