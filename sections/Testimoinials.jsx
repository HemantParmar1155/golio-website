import "../style/Testimonial.css";
import testimonialImg from "../assets/testimonials.jpg";

export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-left">
        <h2>
          What our client says <br /> about our services.
        </h2>

        <div className="quote-box">
          <div className="quote-line"></div>

          <p>
            “This guy is true professional and very experienced in migration
            and server configuration. He was able to complete my order in time
            and as per agreed scope. Highly recommend!”
          </p>
        </div>

        <div className="quote-icon">❝❞</div>

        <div className="nav-buttons">
          <button>←</button>
          <button>→</button>
        </div>
      </div>

      <div className="testimonial-right">
        <img src={testimonialImg} alt="Client" />
      </div>
    </section>
  );
}
