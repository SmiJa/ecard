import './App.css';
import GreetingImage from './images/greetingCardImg.jpg';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import CreateCard from './components/CreateCard';
import PreviewCard from './components/PreviewCard';
import ReceivedCard from './components/ReceivedCard';

function App() {
  const query = new URLSearchParams(window.location.search);
  const [email, setEmail] = useState("");
  const [greeting, setGreeting] = useState(query.get("greeting") || "Dear friend");
  const [body, setBody] = useState(query.get("body") || "I hope you have wonderful holiday!");
  const [closing, setClosing] = useState(query.get("closing") || "Your friend, person");
  const [display, setDisplay] = useState("landing");

  

  const hasQuery = () => {
    if (query.has('greeting')) {
      setDisplay("card");
    } else if (query.has('')){
      setDisplay("landing");
    }
  }
  

  return (
    <div className="App">
      <Header
        setDisplay={setDisplay}
      />
      <main id="content-wrap" onLoad={hasQuery}>
        {display === "card"
        && <ReceivedCard
            Greeting={greeting}
            Body={body}
            Closing={closing}
            GreetingImage={GreetingImage}
            setDisplay={setDisplay}
          />
        }
        {display === "landing" 
        && <LandingPage
            setDisplay={setDisplay}
            GreetingImage={GreetingImage}
          />
        }
        {display === "create" 
        && <CreateCard
            setDisplay={setDisplay}
            GreetingImage={GreetingImage}
            Email={email}
            SetEmail={setEmail}
            Greeting={greeting}
            SetGreeting={setGreeting}
            Body={body}
            SetBody={setBody}
            Closing={closing}
            SetClosing={setClosing}
          />
        }
        {display === "preview" 
        && <PreviewCard
            setDisplay={setDisplay}
            GreetingImage={GreetingImage}
            Email={email}
            Greeting={greeting}
            Body={body}
            Closing={closing}
          />
        }
      </main>
      <Footer/>
    </div>
  );
}

export default App;
