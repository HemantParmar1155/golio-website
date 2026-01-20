import "../style/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">

        {/* LOGO */}
        <h2 className="logo">Golio</h2>

        {/* LINKS */}
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>

        {/* BUTTONS */}
        <div className="nav-buttons">
          <button className="btn-outline">Contact</button>
          <button className="btn-primary">Request A Quote</button>
        </div>

      </div>
    </nav>
  );
}
