import "../style/Hero.css"

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>The easiest way to create your website.</h1>
                <p>
                    Golio gives you everything you need to create your website in minutes.
                </p>
                <p>
                    Zakirsoft gives you everything you need to create your website in
                    minutes. Bootstrap code with a well-organized Figma file to design &
                    develop your next websites in minutes.
                </p>
                <ul className="features">
                    <li>✔ Simple & Easy to Use</li>
                    <li>✔ React & Next.js Ready</li>
                    <li>✔ Lifetime Access</li>
                </ul>
            </div>
            <div className="hero-buttons">
                <button className="btn-primary">Get Started</button>
                <button className="btn-outline">View Preview</button>
            </div>
        </section>
    );
}
