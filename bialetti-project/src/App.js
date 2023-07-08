
import './App.css';

import Footer from './Components/Homepage/Footer';
import FooterTop from './Components/Homepage/FooterTop';
import Navbar from './Components/Homepage/Navbar';

import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default App;
