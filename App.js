import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/components/Body';
import Header from './src/components/Header';
import About from './src/components/About';
import Error from './src/components/Error';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import appStore from './src/utils/appStore';
import { Provider } from 'react-redux';
import Cart from './src/components/Cart';

// const heading= React.createElement("h1",{id:"heading"},"Hi from React!");
// const parent= React.createElement("div",{id:"parent"},
//                 React.createElement("div",{id:"child"},
//                 [React.createElement("h1",{},"This is H1"),React.createElement("h2",{},"This is H2")]   
//             )
// );

// const jsxElement= (<h1>Hi this is an element created by jsx</h1>);
// const Comp1= () => <h1>Component 1</h1>;
// const Comp2= () =>{
//     return <h1>Component 2</h1>;
// }
// const Comp3= () =>(
//    <div>
//     <h1>Third Component</h1>
//     <Comp1/>
//     <Comp2/>
//    </div>
// )
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Comp3/>);







const App= () =>{
    return (
        <Provider store={appStore}>
        <div>
            <Header/>
            <Outlet/>
        </div>
        </Provider>
        
    );
} 

const appRouter= createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
              path: "/",
              element: <Body/>
            }, 
            {
                path: "/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path:"/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    }
   
])

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);