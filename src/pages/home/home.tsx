import { Link } from 'react-router-dom'
import CodiFormalLaptop from '../../assets/photos/codi/formal-laptop.jpg'
import ExteriorHouse1 from '../../assets/photos/houses/exterior-1.jpg'
import Interior2 from '../../assets/photos/houses/interior-2-orange-bedroom.jpg'
import Interior6 from '../../assets/photos/houses/interior-6-blue-red-livingroom.jpg'
import Sold6 from '../../assets/photos/sold/sold-6.jpg'
import Sold7 from '../../assets/photos/sold/sold-7.jpg'
import Sold9 from '../../assets/photos/sold/sold-9.jpg'
import { PageContainer } from '../../components'
import './home.css'

export function Home() {
  return (
    <PageContainer>
      {/* <h1>{HOME_HEADER}</h1> */}

      <div className='home-container'>
        <div className='home-photo-banner'>
          <img src={CodiFormalLaptop} alt='' className='home-photo' />
          <img src={ExteriorHouse1} alt='' className='home-photo' />
          <img src={Interior2} alt='' className='home-photo' />
        </div>

        {/* intro */}
        <div>
          <h2>Your Friend in Real Estate</h2>
          <p>
            My passion for real estate was born from my own experience of buying
            and selling homes throughout different stages in my life. I can
            relate to my clients, whether it’s the excitement of finding your
            first home, upgrading for a growing family, purchasing an investment
            property or selling a beloved family home. As your real estate
            advisor, I enjoy guiding you through one of the biggest
            transactions you will make.
          </p>
          <p>
            As your friend in real estate my goal is to help you find the
            PERFECT MATCH! Southeastern Wisconsin has amazing amenities and top
            notch communities. I work in the following counties:
          </p>
          <div className='home-counties-list'>
            <span>#Milwaukee</span>
            <span>#Waukesha</span>
            <span>#Ozaukee</span>
            <span>#Washington</span>
            <span>#Racine</span>
            <span>#Kenosha</span>
            <span>#Walworth</span>
          </div>
          
          <Link to='/about'>
            <button className='home-learn-about-button'>
              Learn more about Codi {'>'}
            </button>
          </Link>
        </div>

        {/* awards */}
        <div className='home-awards'>
          <h2>Awards</h2>
          <div className='home-awards-grid'>
            <div className='home-awards-column'>
              <div className='home-awards-item'>
                Named <strong>"Rookie of the Year"</strong> for Keller Williams
                North Central Region in 2020
              </div>
              <div className='home-awards-item'>
                <strong>Top Producing Agent</strong>, Lannon Stone Realty 2022,
                2023, 2024
              </div>
            </div>
            <div className='home-awards-column'>
              <div className='home-awards-item'>
                Milwaukee's Shepherd Express{' '}
                <strong>BEST of MILWAUKEE Realtor finalist</strong> 2022
              </div>
              <div className='home-awards-item'>
                Nominated and Awarded{' '}
                <strong>Rising Star Real Estate Agent</strong> 2022
              </div>
            </div>
          </div>
          <Link to='/testimonials'>
            <button className='home-learn-about-button'>
              Read what my clients have to say {'>'}
            </button>
          </Link>
        </div>

        {/* buying */}
        <div>
          <h2>Buying</h2>
          <p>
            I am committed to providing buyers a pressure-free, enjoyable, and
            educational home buying experience. We will work together to create
            a path to homeownership that feels authentic to you and achieves
            your real estate goals!
          </p>

          <Link to='/buying'>
            <button className='home-learn-about-button'>
              Starting your house hunt? Text me today. {'>'}
            </button>
          </Link>
        </div>

        {/* selling */}
        <div>
          <h2>Selling</h2>
          <p>
            With years of experience and a track record of successful home
            sales, I’m here to help you achieve your real estate goals. As your
            dedicated advisor, I use proven techniques and effective marketing
            strategies to showcase your home to the right buyers and deliver
            outstanding results.
          </p>
          <Link to='/selling'>
            <button className='home-learn-about-button'>
              Considering a move? Contact me today. {'>'}
            </button>
          </Link>
        </div>

        {/* bayview expert */}
        <div className='home-photo-banner'>
          <img src={Sold7} alt='' className='home-photo' />
          <img src={Interior6} alt='' className='home-photo' />
          <img src={Sold9} alt='' className='home-photo' />
        </div>
        <div>
          <h2>Bay View / 53207 Expert</h2>
          <p>
            Southeastern Wisconsin has amazing amenities and top notch
            communities and while I work in all 7 of them, my favorites, and I
            may be biased, are the communities within the 53207 zip code!
          </p>
          <div className='home-53207-communities'>
            <div className='home-53207-community'>Bay View</div>
            <div className='home-53207-community'>The Garden District</div>
            <div className='home-53207-community'>Tippecanoe</div>
            <div className='home-53207-community'>Saveland Park</div>
            <div className='home-53207-community'>The Green Corridor</div>
            <div className='home-53207-community'>Airport Gardens</div>
            <div className='home-53207-community'>Fernwood</div>
            <div className='home-53207-community'>South Shore</div>
            <div className='home-53207-community'>Areas near Walkers Point</div>
          </div>

          <p>
            I am a Bay View resident, and I am proud to be a part of the
            community and to be able to help others find their perfect home in
            the area.
          </p>
          <div className='home-bayview-accomplishments'>
            <img
              src={Sold6}
              alt='family of four standing in front of a colorful midcentury house with a sold sign'
              className='home-bayview-sold-photo'
            />
            <ul>
              <li>Over $5 Million in sales in 53207 </li>
              <li>Lives and invests in 53207</li>
              <li>Invests in Educational institutions 53207</li>
              <li>Annual sponsor of Second Hand Purrs cat shelter</li>
              <li>Host of Annual Tippecanoe Dumpster Days</li>
              <li>Sponsor of Whitnall Way holiday trees</li>
            </ul>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
