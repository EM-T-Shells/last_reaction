import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;

// const App = () => {
//   return (
//     <div>
//       <header>
//         <h1>Profile Name</h1>
//         <nav>
//           <Link to="/">About Me</Link>
//           <Link to="/portfolio">Portfolio</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/resume">Resume</Link>
//         </nav>
//       </header>
//       <div>
//         <Route exact path="/" component={AboutMe} />
//         <Route exact path="/portfolio" component={Portfolio} />
//         <Route exact path="/contact" component={Contact} />
//         <Route exact path="/resume" component={Resume} />
//       </div>
//       <footer>
//         <span>
//           <a href="http://github.com">GitHub</a>
//         </span>
//         <span>
//           <a href="http://linkedIn.com">LinkedIn</a>
//         </span>
//         <span>
//           <a href="http://stackoverflow.com">Stackoverflow</a>
//         </span>
//       </footer>
//     </div>
//   );
// };
