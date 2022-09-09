import { Stack } from '@chakra-ui/react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import ViewMode from './pages/ViewMode/ViewMode'
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import PrivateRoutes from './utils/PrivateRoutes';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useAuth } from './context/authContext';
import { useEffect, useState } from 'react';

function App() {

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      navigate("/view")
      setIsLoading(false)
    } else {
      navigate('/')
      setIsLoading(false)
    }
  }, [currentUser])

  return (

    isLoading ? <div>Loading...</div> :
      <Stack className="App" minH='100vh' h='100vh' align='center'>
        {

        }
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/view' element={<ViewMode />} exact />
            <Route path='/home' element={<Home />} exact />
            <Route path='/posts' element={<Posts />} exact />
          </Route>
          <Route path='/' element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </Stack >

  )
}

export default App
