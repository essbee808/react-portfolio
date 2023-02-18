import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Live The Aloha Way',
    github: 'https://github.com/essbee808/live-the-aloha-way-frontend',
    link: 'https://livethealohaway.netlify.app/'
  },
  {
      id: 2,
      image: IMG2,
      title: 'Looking For',
      github: 'https://github.com/essbee808/looking-for'
  },
  {
      id: 3,
      image: IMG3,
      title: 'CaliGolf',
      github: 'https://github.com/essbee808/cali-golf-api'
  },
 
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, link}) => {
            return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} target="_blank" className="btn btn-primary">GitHub</a>
                <a href={link} target="_blank" className="btn btn-primary">Link</a>
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