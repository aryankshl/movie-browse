import React, { useState } from 'react';

//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Common/Header';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Movie from './components/Movies/Movies';
import Footer from './components/Common/Footer';
import NotFound from './components/NotFound/NotFound';
import ScrollToTop from './components/Common/ScrollToTop';

// Styles
import { GlobalStyle } from './GlobalStyle';
//
const App = () => {
  const [username, setUserName] = useState(localStorage.getItem("username"));
  return (
    <Router>
      <ScrollToTop />
      <Header username={username} setUserName={unm => setUserName(unm)} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/submit?' element={<Home />}/>
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/SignUp' element={<SignUp setUserName={unm => setUserName(unm)} />} />
        <Route path='/Login' element={<Login setUserName={unm => setUserName(unm)} />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </Router>

  )
}

export default App;
