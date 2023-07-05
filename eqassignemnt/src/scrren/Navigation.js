import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Navigation;