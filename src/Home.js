import React from 'react'
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Intro/>
            <About/>
            <Resume/>
            <Portfolio/>
            <Footer/>
        </div>
    )
}

export default Home
