import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// common components
import Header from './Views/components/header';
import Footer from './Views/components/footer';

// content components
import Home from './Views/content/home';

// Styles and fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
