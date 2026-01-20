import bootstrapImage from "../assets/Bootstrap.png";
import Card from "../components/Cards.jsx";
import { serviceCards } from "../data/cards.js";
import "../style/Bootstrap.css"

export default function Bootstrap() {
    return (
        <div className="bootstrap">
            <div className="bootstrapImage">
                <img src={bootstrapImage} alt="Bootstrap Illustration" />
            </div>
            <h1 className="bootstrap-text1">Beautiful UI kit designed to grow your business.</h1>
            <p className="bootstrap-text2">
                Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.
            </p>

            <div className="grid">
                            {serviceCards.map((card) => (
                                <Card key={card.id} {...card} />
                            ))}
                        </div>
        </div>
    )
}