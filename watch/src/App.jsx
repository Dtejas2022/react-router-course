import React, {useEffect} from "react"
import { BrowserRouter as Router, Routes,Route, useLocation} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/HomePage/Home"
import Footer from "./components/Footer/Footer"
import WatchRepair from "./components/WatchRepair/WatchRepair"
import About from "./components/Footer/About/About"
import Contact from "./components/Contact/Contact"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};


function App() {

  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <div className="pt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WatchRepair" element={<WatchRepair />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
