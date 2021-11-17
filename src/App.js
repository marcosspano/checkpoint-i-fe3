import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.scss';

export default class App extends Component {

render() {
  return (
    <>
      <Header />
      <Banner />
      <Cards />
      <Footer />
    </>
  )
}

}