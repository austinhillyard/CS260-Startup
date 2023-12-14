import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Tracker } from './tracker/tracker';
import { Sharer } from './sharer/sharer';
import { Import } from './import/import';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {

  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
        <div className='body bg-dark text-light'>
            <header className='container-fluid'>
                <nav className='navbar navbar-dark'>
                    <div className='navbar-brand'>
                    Game Tracker
                    </div>
                    <menu className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="">
                                Login
                            </NavLink>
                        </li>
                        {authState === AuthState.Authenticated && (
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="tracker">
                                Tracker
                            </NavLink>
                        </li>
                        )}
                        {authState === AuthState.Authenticated && (
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="import">
                                Import
                            </NavLink>
                        </li>
                        )}
                        {authState === AuthState.Authenticated && (
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="sharer">
                                Sharer
                            </NavLink>
                        </li>
                        )}
                    </menu>
                </nav>
            </header>

            <Routes>
                <Route
                    path='/'
                    element={
                    <Login
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                        setAuthState(authState);
                        setUserName(userName);
                        }}
                    />
                    }
                    exact
                />
                <Route path='/tracker' element={<Tracker />} />
                <Route path='/import' element={<Import />} />
                <Route path='/sharer' element={<Sharer />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className='bg-dark text-white-50'>
            <div className='container-fluid'>
                <span className='text-reset'>Austin Hillyard</span>
                <a className='text-reset' href='https://github.com/austinhillyard/CS260-Startup/tree/main'>
                Source
                </a>
        </div>
        </footer>
    </div>
  </BrowserRouter>

  );

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }
}