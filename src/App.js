import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Banner } from './Section/BannerSection/Banner';
import Header from './Section/header';
import Feature from './Section/FeatureSection/Feature';
import About from './Section/AboutSection/About';
import AboutTwo from './Section/AboutSection/AboutTwo';
import ChooseSaaSpal from './Section/ChooseSaaSpalSection/ChooseSaaSpal';
import Subscribe from './Section/SubscribeSection/Subscribe';
import Footer from './Section/Footer';

function App() {
  return (
    <>
      <header>
      </header>
      <body>
        <Header />
        <Banner />
        <Feature />
        <About />
        <AboutTwo />
        <ChooseSaaSpal />
        <Subscribe />
        <Footer />
      </body>
    </>
  );
}

export default App;
