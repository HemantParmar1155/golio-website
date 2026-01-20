import "../style/cta.css";
import ctaImg from "../assets/cta.png";

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        
        {/* LEFT IMAGE */}
        <div className="cta-image">
          <img src={ctaImg} alt="Project illustration" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="cta-content">
          <h2>
            Have a project idea! <br />
            Let’s work together.
          </h2>

          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>

          <button className="cta-btn">
            Let’s Work Together <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
