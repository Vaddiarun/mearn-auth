import { BrowserRouter,Route,Routes } from "react-router-dom"
import Profile from "./pages/Profile"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Home from "./pages/Home"
import About from './pages/About'
import Header from "./components/Header"




export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Sign-in" element={<Signin/>}/>
        <Route path="/Sign-up" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
