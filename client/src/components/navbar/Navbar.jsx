import { useContext, useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);
  const location = useLocation();
  const path = location.pathname;

  if (currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Estatify</span>
        </a>
        <a href="/" className={path === "/" ? "active" : ""}>Home</a>
        <a href="/list" className={path === "/list" ? "active" : ""}>All Properties</a>
        <a href="/add" className={path === "/add" ? "active" : ""}>Sell Your Property</a>
        <a href="/profile/update" className={path === "/profile/update" ? "active" : ""}>More</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className={`profile ${path === "/profile" ? "active" : ""}`}>
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login" style={{ zIndex: 2 }} className={path === "/login" ? "active" : ""}>Sign in</a>
            <a href="/register" className={`register ${path === "/register" ? "active" : ""}`} style={{ zIndex: 100 }}>
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/" className={path === "/" ? "active" : ""}>Home</a>
          <a href="/about" className={path === "/about" ? "active" : ""}>About</a>
          <a href="/contact" className={path === "/contact" ? "active" : ""}>Contact</a>
          <a href="/agents" className={path === "/agents" ? "active" : ""}>Agents</a>
          <a href="/login" className={path === "/login" ? "active" : ""}>Sign in</a>
          <a href="/register" className={path === "/register" ? "active" : ""}>Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
