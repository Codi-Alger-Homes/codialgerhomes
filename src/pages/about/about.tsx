import FormalLaptop from '../../assets/photos/codi/formal-laptop.jpg'
import FormalScarf from '../../assets/photos/codi/formal-scarf.jpeg'
import RealBestOfMke from '../../assets/photos/codi/real-best-of-mke.jpg'
import RealBigHat from '../../assets/photos/codi/real-big-hat.jpg'
import RealBucksFamily from '../../assets/photos/codi/real-bucks-family.jpg'
import RealBucksSign from '../../assets/photos/codi/bucks.jpg'
import GiannisMural from '../../assets/photos/codi/giannis-mural.jpg'
import RealCat from '../../assets/photos/codi/real-cat.jpg'
import RealDaughter from '../../assets/photos/codi/real-daughter.jpg'
import RealDiva from '../../assets/photos/codi/real-diva.jpg'
import RealDragFace from '../../assets/photos/codi/real-drag-face.jpg'
import RealFamilyCopper from '../../assets/photos/codi/real-family-copper.jpg'
import RealGenerationHeartPants from '../../assets/photos/codi/real-generation-heart-pants.jpg'
import RealHusband from '../../assets/photos/codi/real-husband.jpg'
import RealMural from '../../assets/photos/codi/real-mural.jpg'
import RealNature from '../../assets/photos/codi/real-nature.jpg'
import RealNature2 from '../../assets/photos/codi/real-nature-2.jpg'
import RealBCAFamily from '../../assets/photos/codi/bca.jpg'
import { PageContainer, RowPhotoText } from '../../components'
import './about.css'

export function About() {
  return (
    <PageContainer>
      <h1>About</h1>
      <div className='about-container'>
        <div className='about-photo-banner'>
          <img
            src={RealBCAFamily}
            alt='Codi Alger and her family in Black Cat Alley in downtown Milwaukee'
            className='about-photo'
          />
          <img
            src={FormalScarf}
            alt='Codi Alger in a brown long jacket with a colorful scarf'
            className='about-photo'
          />
          <img
            src={RealNature2}
            alt='Codi Alger in a black mock neck tanktop and sunglasses in front of trees'
            className='about-photo'
          />
        </div>
        <p>
          In 2008 I moved to Milwaukee after graduating with a degree in
          Journalism and Public Relations. Being from Ashland, WI AKA "Way Up
          Nort", I thought Milwaukee was a stepping stone on my way to the BIG
          CITY. We quickly settled into the vibe of Milwaukee.{' '}
        </p>
        <p>
          Prior to real estate I worked in non-profits and most recently higher
          education at MSOE. While there, I was in charge of Student Life on
          campus helping students, staff and faculty to achieve their out of the
          classroom goals! I have been so fortunate to continue to work and
          support the MSOE Raiders!
        </p>

        <div className='about-photo-banner'>
          <img
            src={RealBucksFamily}
            alt='Codi Alger and her family at the Fiserv Forum in Milwaukee'
            className='about-photo'
          />
          <img
            src={RealBucksSign}
            alt='A sign for the Milwaukee Bucks outside of the Fiserv Forum in Milwaukee'
            className='about-photo'
          />
          <img
            src={GiannisMural}
            alt='A mural of Giannis Antetokounmpo in Milwaukee'
            className='about-photo'
          />
        </div>
        <div className='about-activities-container'>
          <p>
            My husband and I have two great kiddos and a house full of cats!
            When I am not working with my clients you can find me:
          </p>
          <ul>
            <li>
              Traveling to places near and far!{' '}
              <a
                href='https://www.visitmilwaukee.org/'
                target='_blank'
                rel='noreferrer'
              >
                (Visit Milwaukee)
              </a>
            </li>
            <li>Watching reality TV </li>
            <li>Anything by the lake</li>
            <li>Picking weeds in my garden</li>
            <li>Halloweening</li>
            <li>Listening to true crime podcasts </li>
            <li>Thrifting and treasure hunting</li>
            <li>
              Drinking decaf at the{' '}
              <a
                href='https://milwaukeerecord.com/food-drink/tucked-away-copper-kitchen-is-the-gold-standard-in-milwaukee-diners/'
                target='_blank'
                rel='noreferrer'
              >
                Copper Kitchen
              </a>
            </li>
          </ul>
        </div>

        <div className='about-photo-row'>
          <img
            src={RealFamilyCopper}
            alt='Codi Alger sitting at a table with her family at the Copper Kitchen in Bayview, Milwaukee'
            className='about-photo-row-photo'
          />
          <img
            src={RealGenerationHeartPants}
            alt='Codi Alger standing with her daughter and mother while wearing jeans with colorful hearts in a rainbow order down the legs'
            className='about-photo-row-photo'
          />
          <img
            src={RealHusband}
            alt='Codi Alger standing with her husband in discovery world in downtown Milwaukee'
            className='about-photo-row-photo'
          />
          <img
            src={RealMural}
            alt='Codi Alger standing with her daughter in front of a mural in Black Cat Alley in downtown Milwaukee'
            className='about-photo-row-photo'
          />
          <img
            src={RealDaughter}
            alt='Codi Alger standing in front of a convex mirrow with her daughter outside with foliage around the mirror and a lighthouse in the background'
            className='about-photo-row-photo'
          />
          <img
            src={RealNature}
            alt='Codi Alger selfie with sunglasses in front of a lovely fall outside background'
            className='about-photo-row-photo'
          />
          <img
            src={RealCat}
            alt='Codi Alger petting a stray orange & white cat atop a flower bed beneath a tree'
            className='about-photo-row-photo'
          />
          <img
            src={RealBigHat}
            alt='Codi Alger wearing a big fuzzy white hat'
            className='about-photo-row-photo'
          />
          <img
            src={RealDiva}
            alt='Codi Alger in front of a modern family character holding a sign reading "Diva"'
            className='about-photo-row-photo'
          />
          <img
            src={RealDragFace}
            alt='Codi Alger in front of a drag queen whose face she is imitating, a look of dramatic distress'
            className='about-photo-row-photo'
          />
        </div>
      </div>
    </PageContainer>
  )
}
