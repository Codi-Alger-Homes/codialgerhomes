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
          <img src={CodiFormalLaptop} alt='' className='home-photo-a' />
          <img src={ExteriorHouse1} alt='' className='home-photo-a' />
          <img src={Interior2} alt='' className='home-photo-a' />
        </div>

        {/* intro */}
        <div>
          <h2>Your Friend in Real Estate</h2>
          <p>
            My passion for real estate was born from my own experience of buying
            and selling homes throughout different stages in my life. I can
            relate to my clients, whether it’s the excitement of finding your
            first home, upgrading for a growing family, purchasing an investment
            property or selling a beloved family home, as your real estate
            advisor, I enjoy guiding people through one of the biggest
            transactions they will make.
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
          <p className='home-learn-about-button'>
            <Link className='link' to='/about'>
              Learn more about Codi {'>'}
            </Link>
          </p>
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
          <div>
            <Link className='link' to='/testimonials'>
              Read testimonials from clients {'>'}
            </Link>
          </div>
        </div>

        {/* buying */}
        <div>
          <h2>Buying</h2>
          <p>
            Buying a home is a big deal. It’s the largest purchase you’ll ever
            make. You need a real estate agent who will help you navigate the
            process and make sure you get the best deal possible. I am that
            agent.
          </p>
          <p>
            I will help you find the perfect home for you and your family. I
            will help you negotiate the best price and terms. I will help you
            with the paperwork and make sure you understand everything you are
            signing. I will be there for you every step of the way.
          </p>
          <p className='home-learn-about-button'>
            <Link className='link' to='/about'>
              Learn more about buying with Codi {'>'}
            </Link>
          </p>
        </div>

        {/* selling */}
        <div>
          <h2>Selling</h2>
          <p>
            Selling your home is a big deal. It’s the largest sale you’ll ever
            make. You need a real estate agent who will help you navigate the
            process and make sure you get the best deal possible. I am that
            agent.
          </p>
          <p>
            I will help you price your home right so it sells quickly and for
            the best price. I will help you market your home so it gets maximum
            exposure. I will help you negotiate the best price and terms. I will
            help you with the paperwork and make sure you understand everything
            you are signing. I will be there for you every step of the way.
          </p>
          <p className='home-learn-about-button'>
            <Link className='link' to='/about'>
              Learn more about selling with Codi {'>'}
            </Link>
          </p>
        </div>

        {/* bayview expert */}
        <div className='home-photo-banner'>
          <img src={Sold7} alt='' className='home-photo-a' />
          <img src={Interior6} alt='' className='home-photo-a' />
          <img src={Sold9} alt='' className='home-photo-a' />
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
