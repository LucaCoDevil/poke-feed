import "./navbar.scss";
import navLogo from "../../images/placeholder-logo.png";

export default function navbar(props) {
  return (
    <div className="navigation-bar">
      <div className="container">
        <div className="col-12">
          <div className="nav-wrapper">
            <img
              className="navbar-logo"
              src={navLogo}
              width="200"
              height="auto"
            />
            <div className="menu-container">
              <ul className="main-menu">
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="">Link</a>
                </li>
              </ul>
              <div className="login-container">
                <button id="loginButton" className="login-btn">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
