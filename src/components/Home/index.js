import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
              <span className="sr-only">Home</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="#">Home:</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cadastro">Cadastro</Link></li>
              <li><Link to="/consultar">Consultar</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
