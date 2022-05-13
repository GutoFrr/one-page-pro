/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'
import Menu from '../components/menu'
import Header from '../components/header'
import HomePage from '../components/home'
import Services from '../components/services'
import Works from '../components/works'
import About from '../components/about'
import News from '../components/news'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Container from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>One Page Pro</title>
      </Head>

      <Menu />
      <Header />
      <HomePage />
      <Services />
      <Works />
      <About />
      <News />
      <Testimonial />
      <Contact />
      <Footer />
    </Container>
  )
}

export default Home
