import React from 'react'
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
            <img src={IMG1} alt="Portfolio Image" />
          </div>
          <h3>Looking For</h3>
          <p>Social care platform equipped with search and bookmarking tools, optimizing access to community resources.</p>
          <a href="https://github.com/essbee808/looking-for" target="_blank" className="btn">GitHub</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="Image" />
          </div>
          <h3>CaliGolf</h3>
          <p>Single page web application (SPA) created using Rails as an API on the backend and JavaScript to handle the client-side.
            This app was designed for golf enthusiasts/hobbyists who are looking for local courses in California.
          </p>
          <a href="https://github.com/essbee808/cali-golf-api" target="_blank" className="btn">GitHub</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio