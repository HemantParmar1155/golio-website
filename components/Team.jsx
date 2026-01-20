import "../style/Team.css";
import { teamMembers } from "../data/teamData";

export default function Team() {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2>Say hello to our team members</h2>
        <p>
          Present sagittis eros in convallis rutrum. Donec auctor nibh justo.
          Vestibulum tincidunt, libero sit amet vestibulum euismod.
        </p>
      </div>

      <div className="team-cards">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div
              className="team-image"
              style={{ backgroundColor: member.bg }}
            >
              <img src={member.image} alt={member.name} />
            </div>

            <h4>{member.name}</h4>
            <span>{member.role}</span>
          </div>
        ))}
      </div>

      <div className="team-nav">
        <button>←</button>
        <button>→</button>
      </div>
    </section>
  );
}
