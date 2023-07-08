
import './App.css';
import Footer from './components/Homepage/Footer';
import FooterTop from './components/Homepage/FooterTop';
import Navbar from './components/Homepage/Navbar';
import HomePage from './components/Homepage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage />
      <FooterTop />
      <Footer />
      
    </div>
  );
}

export default App;
