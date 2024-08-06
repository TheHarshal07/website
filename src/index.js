import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/navbar/Navbar';
import Hero from "./component/Hero/Hero"
import About from "./component/about/about"
import Skills from "./component/skills/skills"
import Experience from './component/work_experience/work_experience';
import Contactme from './component/ContactMe/Contactme';
import Footer from './component/Footer/footer';
import  Projectss  from './component/Project/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <div className="container">
      <Hero/>
      <Projectss/>
      <About/>
      <Skills/>
      <Experience/>
      <Contactme/>
    <Footer/>
    </div>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
