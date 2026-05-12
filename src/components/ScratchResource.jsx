function ScratchResources() {
    return (
      <div className="scratch-resources">
  
        <a
          href="https://scratch.mit.edu/projects/editor/"
          target="_blank"
          rel="noreferrer"
          className="scratch-resource scratch-link"
        >
          <span>🎨</span>
          Open Scratch
        </a>
  
        <a
          href="https://www.youtube.com/watch?v=jXUZaf5D12A"
          target="_blank"
          rel="noreferrer"
          className="scratch-resource tutorial-link"
        >
          <img
            src="https://img.youtube.com/vi/jXUZaf5D12A/mqdefault.jpg"
            alt="Scratch Tutorial"
          />
  
          <div>
            <h4>Scratch Tutorial</h4>
            <p>Beginner walkthrough</p>
          </div>
  
        </a>
  
      </div>
    );
  }
  
  export default ScratchResources;