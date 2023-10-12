import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import RestaurantDetails from "./components/RestaurantDetails"
function App() {
  return (
    <div className="container-fluid"> 
      

    <Router>
    <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      </Routes>
      <Footer /> 
    </Router>
   
    
  </div>
  );
}

export default App;
