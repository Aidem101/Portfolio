import React, { useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import gameImg from '../assets/game.png';
import konsImg from '../assets/kons.png';
import siteImg from '../assets/site.png';


const Projects = () => {
  const projects = useMemo(() => [
    {
      id: 1,
      title: "Личное портфолио веб-разработчика",
      description:
        "Многостраничный сайт-портфолио с адаптивной вёрсткой и современным UI/UX-дизайном. Реализован на React с использованием React Router, CSS-модулей и анимаций. Подключена форма обратной связи.",
      tags: ["React", "CSS", "JavaScript", "Figma"],
      className: "project-1",
    },
    {
      id: 2,
      title: "Игровой проект на Unity",
      image: gameImg,
      description:
        "2D платформер с возможностью прыжков, атаки и взаимодействия с врагами. Реализовано восстановление здоровья и поведение противников. Все спрайты и Tilemap созданы вручную.",
      tags: ["Unity", "C#", "Game Design"],
      className: "project-2",
    },
    {
      id: 3,
      title: "Сайт консалтинговой компании",
      image: konsImg,
      description:
        "Адаптивный лендинг в корпоративном стиле, основанный на готовом макете из Figma. Реализованы стилизованные блоки, навигация и адаптация под мобильные устройства. Использован HTML/CSS.",
      tags: ["HTML", "CSS", "Figma"],
      className: "project-3",
    },
    {
      id: 4,
      title: "Верстка макета из Figma",
      image: siteImg,
      description:
        "Практическое задание по вёрстке: перенос дизайн-макета сайта в код с использованием HTML5 и CSS3. Соблюдены принципы pixel-perfect, семантики и адаптивности.",
      tags: ["HTML", "CSS", "Figma"],
      className: "project-4",
    },
  ], []);

  return (
    <section className="projects">
      <h2>Проекты</h2>
      <p>Вещи, которые я уже создал</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;