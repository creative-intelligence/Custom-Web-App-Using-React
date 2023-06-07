import React from 'react'
import Header from '../home/Header';
import Profile from '../home/Profile';
import Collection from '../home/Collection';
import Footer from '../home/Footer';
// import CartProvider from "./components/Shop/CartProvider";



function Home() {
  return (
   <React.Fragment>
    <Header/>
    <Profile/>
    <Collection/>
    <Footer/>
    </React.Fragment>
  )
}

export default Home;