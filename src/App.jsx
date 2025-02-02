import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MyformData } from "./pages/Contact"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Applayout from './Components/Layouts/Applayout'
import Error from './pages/Error'

const App = () => {
    let router = createBrowserRouter([
        {
            path : '/',
            element : <Applayout/>,
            errorElement : <Error/>,
            children : [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path : '/about',
                    element : <About/>
                },
                {
                    path : '/contact',
                    element : <Contact/>,
                    action : MyformData
                }
            ]
        }
       
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App




