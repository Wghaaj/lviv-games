import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './header/Header';
import './App.css'
import { Footer } from './footer/Footer';
import { Title } from './main/Title';
import { Divider } from './main/Divider';





function App() {
  return (
    <>
      <Header />
      <main>
        <Title />
        <Divider />
      </main>
      <Footer />
    </>
  );
}

export default App;

