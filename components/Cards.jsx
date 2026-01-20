import "../style/Card.css"

export default function Cards(
    {
        type,
        image,
        icon,
        title,
        description,
        buttonText,
        bgColor
    }
) {
    if (type === "service") {
        return (
            <div className="card service-card" style={{ backgroundColor: bgColor }}>
                <img src={icon} alt={title} className="service-icon" />
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="service-button">{buttonText} →</button>
            </div>
        );
    }

    if (type === "project") {
        return (
            <div className="card project-card">
                <img src={image} alt={title} className="project-image" />
                <div className="project-footer">
                    <h3>{title}</h3>
                    <button className="link-btn">{buttonText} →</button>
                </div>
            </div>
        );
    }

    return null;
}