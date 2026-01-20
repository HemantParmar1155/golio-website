import Card from "../components/Cards.jsx";
import { projectCards } from "../data/cards.js";
import "../style/Portfolio.css";

export default function Projects() {
  return (
    <div className="project-section">
      <div>
        <h2>Selected projects</h2>
        <p>
          Cras imperdiet est eget nulla fringilla, sit amet volutpat sem tristique. Pellentesque quis augue ac mauris posuere vehicula.
        </p>
      </div>

      <div className="project-grid">
        {projectCards.map((card) => (
          <Card key={card.id} {...card} type="project" />
        ))}
      </div>
    </div>
  );
}
