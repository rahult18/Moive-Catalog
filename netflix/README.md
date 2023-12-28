In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Notes:
1. In the public folder you will find the html that shows the homepage of react
2. In the src folder there is code for JS files where the app is built on. The `App.js` file will have the JSX code for the application. 
3. JSX and HTML look the same but they have their own differences. The main difference is that JSX will have `className` as an argument in the element tag
4. For code and other dynamic expressions we enclose it in `{}` in JSX, where we can JS code in those brackets
5. If we want to render two elements next to each other then we need to wrap them in a react fragment like this:
    ```
    <>
        <h1> hello this is a react component </h1>
        <h2> bye </h2>
    </>
    ```
6. There are two types of components in React, they are: Functional Component & Class-Based compoents. We mostly use the functional components.
7. This is how we create a component in React, this is called as Functional-component:
    ```
    const Person = () => {
        return (
            <div>
                <h1> Name: John </h1>
                <h2> Age: 32 </h2>
                <h2> Gender: Male </h2>
            </div>
        )
    }
    ```
    This is how we can use the above component in another main component:
    ```
    const App = () => {
        return(
            <div className="App">
                <Person />
            </div>
        )
    }
    ```
8. We can pass arguments to the components like this with the help of **props**:
    
    Person Component with props
    ```
    const Person = (props) => {
        return (
            <div>
                <h1> Name: {props.name} </h1>
                <h2> Age: {props.age} </h2>
                <h2> Gender: {props.gender} </h2>
            </div>
        )
    }
    ```
    This is how we can use the above component in another main component:
    ```
    const App = () => {
        return(
            <div className="App">
                <Person name="John" age="32" gender="Male" />
            </div>
        )
    }
    ```
9. Hooks helps us to extend React features without writing classes. Anything that starts with `use` and it is a function is a called as a **hook** in React. 
10. **useState:**  It is a hook that lets you add React state to function components. This is how we can initialise it:
    ```
    const [count, setCount] = useState(0);
    - the first arg holds the value of the state
    - the second arg is the setter function that helps us modify the value of the state
    ```
    This is how we can modify the state by attaching it to an event:
    ```
    <button 
        onClick={ () => {
            setCount(100);
        }
    }>
        Click Me
    </button>
    ```
    We can update the count based on the previous value of the count by accessing the prevCount variable in the setter function **setCount()**, this is how we can do that:
    ```
    <button
        onClick={ () => {
            setCount((prevCount) => prevCount + 1);
        }
    }>
        Click Me
    </button>
    ```
11. **useEffect:** is another Hook that allows you to perform side effects in function component. This is how we can initialise it:
    ```
    useEffect(() => {
        setCount(150);
    },[])
    - the first arg accepts a callback function
    - the second arg is the dependency array, based on this dependency array the effect will be triggered
    - if the dependency array is empty then the code inside the callback function will executed when the component loads
    ```
    Linking the useEffect to the count, so whenever the count's state is modified it will trigger the useEffect below
    ```
    useEffect(() => {
        alert("Counter was changed to "+count);
    },[count]);
    ```
12. This is how we can import the useState and useEffect in react: `import { useEffect, useState } from 'react';`
13. For Material UI import using this `import {Typography} from '@mui/material'` to write **h1** and other elements
14. To add style to react components we can use either `style` or `sx` attribute to add style to the component like this:
    ```
    <Typography sx={{ fontSize: 14 }} gutterBottom></Typography>
    ```

