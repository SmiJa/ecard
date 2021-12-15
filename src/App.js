import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { useState } from 'react';

function App() {

  const [email, setEmail] = useState();
  const [greeting, setGreeting] = useState();
  const [body, setBody] = useState();
  const [closing, setClosing] = useState();
  const [display, setDisplay] = useState();

  return (
    <div className="App">
      <Header/>
      <main id="content-wrap">
        <LandingPage
          setDisplay={setDisplay}
        />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
