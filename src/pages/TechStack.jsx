import React from 'react';

const TechStack = () => {
  const techStack = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Git",
    "VS Code",
    "GitHub",
    "Figma",
  ];

  return (
    <section className="tech-stack">
      <h2>Мой технический стек</h2>
      <p>Технологии, с которыми я предпочитаю работать</p>

      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-item">
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;