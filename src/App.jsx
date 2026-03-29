import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home/Home'
import ContactPage from './pages/ContactPage/ContactPage'
import DeliveryPage from './pages/DeliveryPage/DeliveryPage'
import PaymentPage from './pages/PaymantPage/PaymentPage'
import PostsPage from './pages/PostsPage/PostsPage'
import ProvidersPage from './pages/ProvidersPage/ProvidersPage'


const Layout = () => {
  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/contacts' element={<ContactPage />} />
          <Route path='/delivery' element={<DeliveryPage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/articles' element={<PostsPage />} />
          <Route path='/suppliers' element={<ProvidersPage />} />
        </Route>
      </Routes>
    </div>
  )
}
//  jasa emi 
// header scrin

export default App