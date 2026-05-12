function ScratchCard({ title, description, color }) {
    return (
      <div className="flip-card">
  
        <div className="flip-card-inner">
  
          <div className={`flip-card-front ${color}`}>
            <h3>{title}</h3>
          </div>
  
          <div className="flip-card-back">
            <p>{description}</p>
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default ScratchCard;