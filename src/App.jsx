import { Stack } from '@chakra-ui/react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import ViewMode from './pages/ViewMode/ViewMode'
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';

function App() {

  return (
    <Stack className="App" minH='100vh' h='100vh' align='center'>
      <Routes>
        <Route path='/' element={<ViewMode />} />
        <Route path='/home' element={<Home />} />
        <Route path='/posts' element={<Posts />}/>
      </Routes>
      {/* <Footer /> */}
    </Stack>
  )
}

export default App
