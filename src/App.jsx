import { Stack } from '@chakra-ui/react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import ViewMode from './pages/ViewMode/ViewMode'
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import PrivateRoutes from './utils/PrivateRoutes';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useAuth } from './context/authContext';

function App() {

  const { currentUser, pending } = useAuth()

  return (

    <Stack className="App" minH='100vh' h='100vh' align='center'>
      <Routes>
        {
          !currentUser && pending ?
            <Route path='/login' element={<Login />} />
            :
            <Route element={<PrivateRoutes />}>
              <Route path="*" element={<PageNotFound />} />
              <Route path='/home' element={<Home />} exact />
              <Route path='/' element={<ViewMode />} exact />
              <Route path='/posts' element={<Posts />} exact />
            </Route>
        }
      </Routes>

    </Stack >

  )
}

export default App
