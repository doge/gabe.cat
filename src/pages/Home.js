import {
  NavLink,
  Outlet
} from 'react-router-dom';

import './Home.scss';
import '../components/MenuItem.scss';

export default function Home() {
  return (
    <>
    <div className="container">
      <body>
        <div class="row">
 
          <div className="menu-col">
            
            <header>hi, i'm gabe.</header>


            <div className="menu-group">
              <div className="menu-item" target="_blank" rel="noreferrer">
                <a href="mailto:me@gabe.cat">
                  <span className="link">mail</span>
                </a>
              </div>

              <div className="menu-item">
                <a href="https://github.com/doge" target="_blank" rel="noreferrer">
                  <span className="link">github</span>
                </a>
              </div>

              <div className="menu-item">
                <NavLink to="/about">
                  <span>about</span>
                </NavLink>
              </div>

              <div className="menu-item">
                <NavLink to="/projects">
                  <span>projects</span>
                </NavLink>
              </div>
            </div>
          </div>

          <div class="col">
            <Outlet />
          </div>

        </div>

      </body>
    </div>
    </>
  );
};