import './App.css';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Intro from './components/Intro';
import News from './components/News';
import Releases from './components/Releases';

function App() {
  return (
    <div className="App">
      <div className="px-4 md:px-24 lg:px-48" id="sections">
        <Intro/>
        <Releases/>
        <News/>
        <Features/>
        <Contact/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
