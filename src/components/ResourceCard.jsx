function ResourceCard({
    title,
    description,
    link,
    image,
    buttonText
  }) {
    return (
      <div className="resource-card">
  
        <img
          src={image}
          alt={title}
          className="resource-image"
        />
  
        <div className="resource-content">
  
          <h3>{title}</h3>
  
          <p>{description}</p>
  
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="resource-button"
          >
            {buttonText}
          </a>
  
        </div>
  
      </div>
    );
  }
  
  export default ResourceCard;