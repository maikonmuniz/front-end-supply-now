import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'


import Home from './components/pages/Home'
import Register from './components/pages/Auth/Register'
import Login from './components/pages/Auth/Login'
import Profile from './components/pages/User/Profile'
import AddProducts from './components/pages/Product/addPrducts'
// Context
import {UserProvider} from './context/UserContext'
import MyProducts from './components/pages/Product/myProducts'


function App() {
  return (
    <Router>
      <UserProvider>
      <Navbar />
      <Container>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/product/myproducts" element={<MyProducts/>} />
        <Route path="/product/add" element={<AddProducts />} />

      </Routes>
      </Container>
     <Footer />
     </UserProvider>
    </Router>
  )
}

export default App
