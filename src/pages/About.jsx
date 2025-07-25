import React from 'react';

const About = () => {
  return (
<section className="about">
  <h2>Обо мне</h2>
  <div className="about-section">
  	<h3>Привет!</h3>
  	  <p>
	    Меня зовут Иван Метленко, я начинающий frontend-разработчик. Люблю создавать
	    аккуратные и отзывчивые интерфейсы, постоянно учусь новому и уже успел поработать над
	    несколькими учебными проектами на React и чистом HTML/CSS.
	  </p>
  </div>
  <div className="about-section">
    <h3>Опыт работы</h3>
    <p>
      Пока не имею коммерческого опыта, но активно развиваюсь как frontend-разработчик.
      Участвовал в учебных проектах, где создавал сайты с использованием React, HTML и CSS.
      Реализовал собственное портфолио, а также интерактивную игру на Unity.
    </p>
  </div>

  <div className="about-section">
    <h3>Образование</h3>
    <p>
      Среднее специальное образование (неполное) по направлению «Программное обеспечение
      вычислительной техники и автоматизированных систем». Изучаю HTML, CSS, JavaScript, React,
      а также основы Python и C++. Продолжаю обучение через курсы и практику.
    </p>
  </div>
</section>
  );
};

export default About;