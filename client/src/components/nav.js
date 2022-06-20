import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import {Stats} from '../pages/Stats';

export function Nav() {
    return (

      <div className="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/rules" >How to Play</Link>
          <Link to="/stats" >Stats</Link>
        </nav>
      </div>
    )}

