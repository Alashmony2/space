import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Destination from './pages/Destination/Destination'
import Crew from './pages/Crew/Crew'
import Home from './pages/Home/Home'
import Technology from './pages/Technology/Technology'


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home />, },
    {path: "/destination",element: <Destination />,},
    {path: "/crew",element: <Crew />,},
    {path: "/technology",element: <Technology />,},
  ])

  return <>
    <RouterProvider router={router} />
  </>

}

export default App
