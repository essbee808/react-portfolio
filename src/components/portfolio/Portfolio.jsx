import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Looking For</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/essbee808/looking-for" target="_blank" className="btn btn-primary">GitHub</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>CaliGolf</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/essbee808/cali-golf-api" target="_blank" className="btn btn-primary">GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio