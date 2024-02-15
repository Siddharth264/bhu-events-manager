import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import About from './pages/About'
import CreateNewEvent from './pages/CreateNewEvent'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/about' element={<About/>} />
      <Route element={<PrivateRoute/>}>
      <Route path='/profile' element={<Profile/>} />
      <Route path='/create-event' element={<CreateNewEvent/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
