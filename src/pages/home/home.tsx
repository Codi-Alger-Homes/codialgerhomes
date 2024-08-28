import { Link } from 'react-router-dom'
import CodiBestOfMKEFormal from '../../assets/photos/codi/formal-best-of-mke.jpg'
import CodiLatteLaptop from '../../assets/photos/codi/formal-latte-laptop.jpg'
import { PageContainer } from '../../components'
import { HOME_HEADER } from '../../constants'
import './home.css'

export function Home() {
  return (
    <PageContainer>
      <h1>{HOME_HEADER}</h1>
      <div className='home-container'>
        <div>
          <h2>"Your Friend in Real Estate"</h2>
          <p>
            As your friend in real estate my goal is to help you find the
            PERFECT MATCH! Southeastern Wisconsin has amazing amenities and top
            notch communities. I work in the following counties:
          </p>
          <ul>
            <li>Milwaukee</li>
            <li>Waukesha</li>
            <li>Ozaukee</li>
            <li>Washington</li>
            <li>Racine</li>
            <li>Kenosha</li>
            <li>Walworth</li>
          </ul>
          <Link className='link' to='/about'>
            Learn more about Codi
          </Link>
        </div>

        <div>
          <h2>Awards</h2>
          <ul>
            <li>
              Named "Rookie of the Year" for Keller Williams North Central
              Region in 2020
            </li>
            <li>
              Milwaukee's Shepherd Express BEST of MILWAUKEE Realtor finalist
              2022
            </li>
            <li>Top Producing Agent, Lannon Stone Realty 2022, 2023, 2024</li>
            <li>
              Nominated and Awarded 2022 Rising Star Real Estate Agent 2022
            </li>
          </ul>

          <img
            src={CodiBestOfMKEFormal}
            alt='Codi Alger at the Shepherd Express Best of MKE 2022, on a red carpet against an event backdrop, wearing a black long sleeve open back top with burnt orange flared trousers'
            className='home-photo-formal'
          />
          <img
            src={CodiLatteLaptop}
            alt='Codi Alger at the Hawthorne Coffee Roasters in Bayview, Milwaukee, sitting at a table in front of a laptop'
            className='home-photo-formal'
          />
        </div>

        <div>
          <h2>Bay View / 53207 Expert</h2>
          <p>
            Southeastern Wisconsin has amazing amenities and top notch
            communities and while I work in all 7 of them, my favorites, and I
            may be biased, are the communities within the 53207 zip code!
          </p>
          <ul>
            <li>Bay View</li>
            <li>The Garden District</li>
            <li>Tippecanoe</li>
            <li>Saveland Park</li>
            <li>The Green Corridor</li>
            <li>Airport Gardens</li>
            <li>Fernwood</li>
            <li>South Shore</li>
            <li>Areas near Walkers Point</li>
          </ul>

          <p>
            I am a Bay View resident and I am proud to be a part of the
            community and to be able to help others find their perfect home in
            the area.
          </p>
          <ul>
            <li>Over $5 Million in sales in 53207 </li>
            <li>Lives and invests in 53207</li>
            <li>Invests in Educational institutions 53207</li>
            <li>Annual sponsor of Second Hand Purrs cat shelter</li>
            <li>Host of Annual Tippecanoe Dumpster Days</li>
            <li>Sponsor of Whitnall Way holiday trees</li>
          </ul>
        </div>
        {/* <div className='home-section-2-container'>
          <div className='home-photo-2-container'>
            <FramedPhoto
              src={Sold6}
              alt={''}
              frameColor='blue'
              imgTagClassName='home-photo-1'
            />
            <FramedPhoto
              src={Sold8}
              alt={''}
              frameColor='blue'
              imgTagClassName='home-photo-1'
            />
          </div>
        </div> */}
      </div>
    </PageContainer>
  )
}
