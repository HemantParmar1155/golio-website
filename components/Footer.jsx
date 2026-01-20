import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <h2>⚡ Golio</h2>
          <p>
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>

          <div className="mode-toggle">
            <span>Light Mode</span>
            <div className="toggle"></div>
            <span>Dark Mode</span>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Portfolio</li>
            <li>About</li>
            <li>Services</li>
            <li>Pricing Plans</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>UI/UX Design</li>
            <li>Branding</li>
            <li>Illustration</li>
            <li>Design Concept</li>
            <li>App Design</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Product</h4>
          <ul>
            <li>Figma</li>
            <li>Adobe</li>
            <li>Dribbble</li>
            <li>Behance</li>
            <li>Themeforest</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <button className="facebook">Facebook</button>
          <button className="linkedin">LinkedIn</button>
          <button className="twitter">Twitter</button>
          <button className="instagram">Instagram</button>
        </div>

      </div>

      <div className="footer-bottom">
        © 2021 - Golio UI Kit
      </div>
    </footer>
  );
};

export default Footer;
