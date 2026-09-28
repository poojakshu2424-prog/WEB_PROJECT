import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [photo, setPhoto] = useState(null);

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <section className="home">

      <div className="home-content">

        <p className="small-title">HELLO, I'M</p>

        <h1>
          Pooja <span>R</span>
        </h1>

        <h2>
          Computer Science Engineering Student
        </h2>

        <p className="description">
          UI/UX Designer & Aspiring Software Developer.
          I love transforming ideas into beautiful and
          user-friendly digital experiences.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="primary-btn">
            View My Work →
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>
        </div>

        <div className="social-text">
          <span>●</span> Available for opportunities
        </div>

      </div>

      <div className="photo-section">

        <div className="photo-circle">

          {photo ? (
            <img src={photo} alt="Profile" />
          ) : (
            <div className="photo-placeholder">
              <span>+</span>
              <p>Add Photo</p>
            </div>
          )}

        </div>

        <label className="upload-btn">
          Upload Photo
          <input
            type="file"
            accept="image/*"
            onChange={handlePhoto}
            hidden
          />
        </label>

      </div>

    </section>
  );
}

export default Home;