import './App.css';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <nav>
          <h1>My Portfolio</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero">
        <div className="hero-content"> {/* Added a div to layer content over the image */}
          <h2>Welcome to My Portfolio</h2>
          <p>I'm a passionate developer creating amazing web experiences.</p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <img
            src="https://via.placeholder.com/300x300/e0e7ee/2c3e50?text=Your+Professional+Photo"
            alt="Professional photo of the developer"
            className="profile-photo"
          />
          <p>Hello! I'm a full-stack developer with a love for creating innovative solutions. I specialize in React, Node.js, and modern web technologies. My approach blends meticulous coding with creative problem-solving to deliver robust and intuitive web applications.</p>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {/* You could also add small icons next to each skill, e.g., <img src="react-icon.png" alt="React" /> */}
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
          <div className="skill">CSS</div>
          <div className="skill">HTML</div>
          <div className="skill">Git</div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project">
            <img
              src="Portfolio\src\assets\Screenshot 2025-11-17 212519.png"
              alt="Screenshot of Project 1"
              className="project-screenshot"
            />
            <h3>Project 1: E-commerce Platform</h3>
            <p>A sophisticated web application built with React and Node.js, featuring secure payment integration and a responsive design.</p>
            <a href="https://travelearncoin.netlify.app/" className="project-link">Currently Doing</a>
          </div>
          <div className="project">
            <img
              src="Portfolio\src\assets\Screenshot 2025-11-17 212624.png"
              alt="Screenshot of Project 2"
              className="project-screenshot"
            />
            <h3>Project 2: Hospital Queue Managment System</h3>
            <p>A hospital queue management system efficiently organizes patient flow by digitally allocating patients a service queue number or time slot, reducing wait times and improving staff productivity. It uses centralized screens and alerts to direct patients, leading to better patient satisfaction and optimized resource use.</p>
            <a href="https://astounding-treacle-cfa2e8.netlify.app/" className="project-link">View Project</a>
          </div>
          <div className="project">
            <img
              src="Portfolio/src/assets/Screenshot 2025-11-17 212922.png"
              alt="Screenshot of Project 3"
              className="project-screenshot"
            />
            <h3>Project 3: Interactive Portfolio Site</h3>
            <p>This very portfolio site, showcasing modern web development techniques and elegant design principles.</p>
            <a href="" className="project-link">View Project</a>
          </div>
        </div>
      </section>

      <ContactForm />

      <footer className="footer">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;