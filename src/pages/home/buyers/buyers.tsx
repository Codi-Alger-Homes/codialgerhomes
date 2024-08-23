import { Link } from 'react-router-dom'
import Sold9 from '../../../assets/photos/sold/sold-9.jpg'
import { FramedPhoto } from '../../../components'
import './buyers.css'

export function Buyers() {
  return (
    <>
      <h1>Buyers</h1>
      <div className='buyers-container'>
        <p>
          Overall, my commitment to providing a pressure-free, enjoyable, and
          educational experience sets me apart as a buyer's agent. I'm dedicated
          to helping you find the perfect home that not only meets your current
          needs but also aligns with your long-term goals and aspirations.
        </p>
        <div className='buyers-overview-container'>
          <FramedPhoto
            src={Sold9}
            alt='Sold house featuring two individuals, parent & child, holding a white sign with red text saying "Sold"'
            imgTagClassName='buyers-photo'
          />
          <ul className='buyers-overview-bullets'>
            <li>
              <div>
                <h2>No pressure approach</h2>
              </div>
            </li>

            <li>
              <div>
                <h2>Enjoyable experience</h2>
              </div>
            </li>

            <li>
              <div>
                <h2>Education-focused approach</h2>
              </div>
            </li>
          </ul>
        </div>
        <p>
          I understand that purchasing a home is a significant decision, and I
          prioritize your needs above all else. Rather than pushing you towards
          a sale, I focus on providing you with a wide range of options and
          guiding you through the decision-making process. Your satisfaction and
          comfort are paramount.
        </p>
        <p>
          Buying a home doesn't have to be stressful—it can actually be
          enjoyable! I strive to lighten the mood and make the entire process as
          fun and engaging as possible. Whether it's sharing lighthearted jokes
          or discussing your favorite TV shows and podcasts, I aim to create a
          relaxed atmosphere where you feel at ease.
        </p>
        <p>
          I believe that knowledge is power, especially when it comes to making
          informed decisions about real estate. Throughout our interactions, I
          make it a priority to educate you on various aspects of home buying,
          from identifying potential red flags to understanding the nuances of
          property maintenance and equity growth. By empowering you with
          valuable insights, I help ensure that you feel confident and informed
          every step of the way.
        </p>
        <Link className='link-button' to='/testimonials'>
          Read buyers testimonials {'>'}
        </Link>
      </div>
    </>
  )
}
