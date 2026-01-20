import HeroImg from "../assets/hero.jpg";
import "../style/HeroImg.css"

export default function HeroImage() {
    return (
        <div className="hero-image">
            <img src={HeroImg} alt="Hero Illustration"/>
        </div>
    )
}