import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerSection">
          <h3>About Us</h3>
          <p>
            We are committed to delivering the best services to our clients. Our team of experts is dedicated to providing innovative solutions that meet your needs.
           
          </p>
        </div>

        <div className="footerSection">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footerSection">
          <h3>Our Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Cloud Hosting</li>
          </ul>
        </div>

        <div className="footerSection">
          <h3>Contact Us</h3>
          <p>Email: support@yourcompany.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Delhi, India</p>
        </div>
      </div>

      <div className="footerBottom">
        <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
