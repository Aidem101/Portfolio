import React from 'react';
import { User } from 'lucide-react';

const Home = () => {
  return (
    <section className="home">
      <h1 className="title">
        Привет, я Иван — <span className="highlight">frontend</span>
        -разработчик
      </h1>
      <div className="avatar">
        <User size={60} color="#666" />
      </div>
    </section>
  );
};

export default Home;