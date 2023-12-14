import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log("Log in successful.")
    getIdFromServer();
  }, []);

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='userName'>{props.userName}</div>
      <Button variant='primary' onClick={() => navigate('/tracker')}>
        Tracker
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );

  async function getIdFromServer(userName) {
    const userResponse = await fetch(`/api/user/` + userName);
      let body = await userResponse.json();
      if (body.steamId) {
        localStorage.setItem('id', body.steamId);
      }
  }
}
