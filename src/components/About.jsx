import React from 'react';
import './AboutPage.css';
import githubIcon from '../assets/images/git.png';
import instagramIcon from '../assets/images/insta.webp';
import telegramIcon from '../assets/images/telegram.png';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1 className="about-title">Who Am I?</h1>
        <p className="about-subtitle">A creative mind with a passion for technology and design</p>
      </header>
      <section className="about-content">
        <article className="about-section">
          <h2>🌟 My Mission</h2>
          <p>
            I strive to create user-friendly, beautiful, and innovative web experiences that
            connect technology with human needs.
          </p>
        </article>
        <article className="about-section">
          <h2>💻 What I Do</h2>
          <p>
            As a Frontend Developer and UX/UI Designer, I specialize in developing responsive web
            applications and crafting interfaces that users love.
          </p>
        </article>
        <article className="about-section">
          <h2>🌍 Beyond Work</h2>
          <p>
            When I'm not coding, you can find me hiking mountains, exploring new ideas, or enjoying
            a good book.
          </p>
        </article>
      </section>
      <footer className="about-footer">
       
        <div className="social-icons">
          <a href="https://github.com/icdfh" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/makoozez/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://t.me/biahavor" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
