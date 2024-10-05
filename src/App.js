import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <header>
          <h1>Your Name</h1>
          <p>Your personal statement or tagline.</p>
        </header>
        <section id="projects">
          <h2>Projects</h2>
          {/* Add your projects here */}
        </section>
        <section id="skills">
          <h2>Skills</h2>
          {/* List your skills here */}
        </section>
        <section id="education">
          <h2>Education</h2>
          {/* Add your education details here */}
        </section>
        <section id="cv">
          <h2>CVV</h2>
          <a href="path/to/your-cv.pdf" download>Download CV</a>
        </section>
        <footer>
          <h2>Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: <a href="your-linkedin-url">Your LinkedIn</a></p>
          <p>Phone: Your Phone Number</p>
        </footer>
      </div>
  );
}

export default App;