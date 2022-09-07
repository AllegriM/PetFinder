import { Stack } from '@chakra-ui/react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import ViewMode from './pages/ViewMode/ViewMode'
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import PrivateRoutes from './utils/PrivateRoutes';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AuthContextProvider from './context/authContext';

function App() {

  return (
    <Stack className="App" minH='100vh' h='100vh' align='center'>
      <AuthContextProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/view' element={<ViewMode />} exact />
            <Route path='/home' element={<Home />} exact />
            <Route path='/posts' element={<Posts />} exact />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthContextProvider>
      {/* <Footer /> */}
    </Stack>
  )
}

export default App
