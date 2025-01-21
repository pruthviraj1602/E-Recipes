import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Footer from './Footer'
import Card from './Card'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <div className="container mb-3">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <Card image="/src/assets/pasta.jpg" tittle="Western Dishesh" para="Here We have Multiple Western Dishesh and Starter"/>
      <Card  image="/src/assets/Indian.jpg" tittle="Indian Dishesh" para="we have Multiple Indian Dishesh And sweet dishesh"/>
      <Card   image="/src/assets/Chinese.jpg" tittle="Chianes Dishesh" para="All Chianes Fast Food and Also Starter And Various Dishesh" />
      </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Home
