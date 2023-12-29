import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from "@/assets/ShelbyLogo.png";
import Home from '@/pages/home';
import AboutUs from '@/pages/aboutus';
import Projects from '@/pages/projects';
import ContactUs from '@/pages/contactus';

const App = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <Router>
      <nav className="header p-28 mb-28">
        <div className={`${flexBetween} bg-white px-5`}>
          {/* left side */}
            <Link to="/">
              <img src={Logo} alt="logo"></img>
            </Link>

          {/* right side */}
          <div className={`${flexBetween} gap-8 text-xl`}>
            <Link 
              className='hover:text-accent'
              to="/"
            >
              Home
            </Link>

            <Link 
              className='hover:text-accent'
              to="/aboutus"
            >
              About Us
            </Link>

            <Link 
              className='hover:text-accent'
              to="/projects"
            >
              Projects
            </Link>

            <Link 
              className='hover:text-accent'
              to="/contactus"
            >
              Contact Us
            </Link>

            <p className='text-primary-red hover:underline'>
              <a href="tel:347633-4662">(347)633-4662</a>
            </p>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
    </Router>
	)
};

export default App;