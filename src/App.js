import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header-section">
        <h1 className="name">Vincent Cui</h1>
        <p className="location">NYC/NJ (Open to relocation)</p>
        <p className="contact">Phone: (908)-304-3267 | Email: vcui@purdue.edu</p>
        <p className="links">
          <a href="https://github.com/vincentcui-ui" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://linkedin.com/in/vincentcui_15" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </header>

      <main className="content">
        <section className="section">
          <h2>Education</h2>
          <p>
            <strong>Purdue University</strong>  
            <br />
            B.S. in Computer Science (SWE/ML Track), Minor in Math and Economics
            <br />
            GPA: 3.75 — Expected May 2025
          </p>
        </section>

        <section className="section">
          <h2>Technical Skills</h2>
          <p>
            <strong>Languages:</strong> Python, C/C++, C#, JS/TS, Java, SQL, HTML/CSS, Go, Ruby, MATLAB, R, Swift, LaTeX
            <br />
            <strong>Frameworks/Tools:</strong> React, TensorFlow, PyTorch, REST API, AWS, Azure, GCP, Node.js, Docker, etc.
          </p>
        </section>

        <section className="section">
          <h2>Experience</h2>
          <p>
            <strong>American Express (Software Engineer Intern)</strong>  
            <br />
            • React, Node.js, AWS, Kafka, Hadoop, Spark, SQL, FastAPI/REST API
            <br />
            • Optimized front-end rewards platform (142+ million users), built real-time feature pipelines
          </p>
          <p>
            <strong>Berkshire Hathaway - TransRe (ML Engineer Intern)</strong>  
            <br />
            • TensorFlow, PyTorch, Azure, Kubernetes, NLTK
            <br />
            • Engineered AI solutions for financial services; built NLP models for contract drafting
          </p>
          <p>
            <strong>GoogleML x Purdue (Software Developer/Researcher)</strong>  
            <br />
            • Python, TensorFlow, OpenCV, scikit-learn, GCP
            <br />
            • Worked on YOLO/EfficientNet/Roberta models for computer vision and text embeddings
          </p>
          <p>
            <strong>Bell Labs (Student Research Assistant)</strong>  
            <br />
            • Python, C++, PyTorch, TensorFlow
            <br />
            • Developed ML for sensor data, IoT analytics, and tissue image processing (94% accuracy)
          </p>
        </section>

      </main>

      <footer className="footer-section">
        <p>© {new Date().getFullYear()} | Created by Vincent Cui</p>
      </footer>
    </div>
  );
}

export default App;
