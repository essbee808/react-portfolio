import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'

const data = [
  {
      id: 1,
      image: IMG1,
      title: 'Looking For',
      github: 'https://github.com/essbee808/looking-for'
  },
  {
      id: 2,
      image: IMG2,
      title: 'CaliGolf',
      github: 'https://github.com/essbee808/cali-golf-api'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github}) => {
            return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} target="_blank" className="btn btn-primary">GitHub</a>
              </div>
            </article>
          )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio