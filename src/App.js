import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Cards from "./Cards";
import React, {useState} from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className={`container-fluid p-0 ${darkMode ? 'dark-mode' : ''}`}> 
        <div className="row">
          <div className="col-md-12">
          <nav className={`navbar shadow navbar-expand-lg ${darkMode ? 'bg-dark' : 'bg-body-tertiary'}`}>
      <div className="container">
        <a className="navbar-brand fw-bold navclr" href="#">Where in the world?</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto">
            <h6 className=" cursor-pointer " onClick={toggleDarkMode}>
              <i className="fa-regular fa-moon"></i>
              <span className="px-2">Dark Mode</span>
            </h6>
          </div>
        </div>
      </div>
    </nav>
          </div>
        </div>
      </div>

      <Cards darkMode={darkMode}/>
    </div>

    
  );
}

export default App;
