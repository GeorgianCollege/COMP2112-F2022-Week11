import React from 'react';

// common components
import Header from './Views/components/header';
import Footer from './Views/components/footer';

// Styles and fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>


      <h1 className="container">Hello, World!</h1>

      <Footer></Footer>
    </div>
  );
}

export default App;
