
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Transforming Ideas into <span className="highlight">Digital Reality</span></h1>
        <p>Innovative web solutions crafted with precision and creativity. Let's bring your vision to life in the digital world.</p>
        <div className="cta-buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">View Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
