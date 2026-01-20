import "../style/Companies.css";
import {companiesData} from "../data/companiesData.js";

export default function Trusted() {
  return (
    <section className="trusted-section">
      <p className="trusted-text">
        Trusted by <span>17k+</span> world largest business company.
      </p>

      <div className="trusted-logos">
        {companiesData.map((company) => (
          <div className="logo-card" key={company.id}>
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </section>
    
  );
}
