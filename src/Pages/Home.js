import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Cart from './Cart'
import Slider from './Slider'

const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <Cart />
            <Footer />
        </>
    )
}

export default Home