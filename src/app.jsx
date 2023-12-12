import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='body bg-dark text-light'>
    <header className='container-fluid'>
      <nav className='navbar fixed-top navbar-dark'>
        <div className='navbar-brand'>
          Game Tracker
        </div>
        <menu className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='index.html'>
              Tracker
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='play.html'>
              Import
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='scores.html'>
              Sharer
            </a>
          </li>
        </menu>
      </nav>
    </header>

    <main>App components go here</main>

    <footer className='bg-dark text-white-50'>
      <div className='container-fluid'>
        <span className='text-reset'>Austin Hillyard</span>
        <a className='text-reset' href='https://github.com/austinhillyard/CS260-Startup/tree/main'>
          Source
        </a>
      </div>
    </footer>
  </div>
  );
}