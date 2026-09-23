import "./Hobbies.css";

function Hobbies() {
  return (
    <div className="hobbies">
      <h1>My Hobbies</h1>

      <div className="hobby-container">

        <div className="hobby-card">
          <h2>🎻Listening to Music</h2>
          <p>I love listening to music in my free time.</p>
        </div>

        <div className="hobby-card">
          <h2>🥇Sports</h2>
          <p>I enjoy playing sports and staying active</p>
        </div>

        <div className="hobby-card">
          <h2>💃 Dancing</h2>
          <p>Dancing is one of my favourite hobbies.</p>
        </div>

        <div className="hobby-card">
          <h2>🎨 Designing</h2>
          <p>I enjoy creating creative and attractive designs.</p>
        </div>

        <div className="hobby-card">
          <h2>🎮Gaming</h2>
          <p>I love playing games in my free time.</p>
        </div>

      </div>
    </div>
  );
}

export default Hobbies;