import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import Counter from "../../components/counter/Counter";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Estatify is a modern real estate web application designed to simplify property buying, selling, and renting. With an intuitive interface, real-time chat, and interactive maps, users can seamlessly explore listings across India, connect with property owners, and make informed decisions. 
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1><Counter end={16} duration={1000} /></h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1><Counter end={200} duration={1000} /></h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1><Counter end={500} duration={1500} /></h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <video src="/vdo.mp4"  autoPlay loop muted playsInline></video>
      </div>
    </div>
  );
}

export default HomePage;
