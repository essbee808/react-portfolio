import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image"></div>
          <h3>Looking For</h3>
          <a href="https://github.com/essbee808/looking-for">See more</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image"></div>
          <h3>Factivity</h3>
          <a href="https://github.com/essbee808/factivity">See more</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio