import FormalLaptop from '../../assets/photos/codi/formal-laptop.jpg'
import RealBestOfMke from '../../assets/photos/codi/real-best-of-mke.jpg'
import RealBigHat from '../../assets/photos/codi/real-big-hat.jpg'
import RealBucksFamily from '../../assets/photos/codi/real-bucks-family.jpg'
import RealCat from '../../assets/photos/codi/real-cat.jpg'
import RealDaughter from '../../assets/photos/codi/real-daughter.jpg'
import RealDiva from '../../assets/photos/codi/real-diva.jpg'
import RealDragFace from '../../assets/photos/codi/real-drag-face.jpg'
import RealFamilyCopper from '../../assets/photos/codi/real-family-copper.jpg'
import RealGenerationHeartPants from '../../assets/photos/codi/real-generation-heart-pants.jpg'
import RealHusband from '../../assets/photos/codi/real-husband.jpg'
import RealMural from '../../assets/photos/codi/real-mural.jpg'
import RealNature from '../../assets/photos/codi/real-nature.jpg'
import { PageContainer, RowPhotoText } from '../../components'
import './about.css'

export function About() {
  return (
    <PageContainer>
      <h1>About</h1>
      <div className='about-container'>
        <RowPhotoText
          text={[
            'My passion for real estate was born from my own experience of buying and selling homes throughout different stages in my life. I can relate to my clients, whether it’s the excitement of finding your first home, upgrading for a growing family, purchasing an investment property or selling a beloved family home, as your real estate advisor, I enjoy guiding people through one of the biggest transactions they will make.',
          ]}
        >
          <img
            src={FormalLaptop}
            alt='Codi Alger sitting at a table in front of a laptop at Hawthorne Coffee Roasters in Bayview, Milwaukee'
            className='about-photo'
          />
        </RowPhotoText>
        <div className='about-photo-row'>
          <img
            src={RealBigHat}
            alt='Codi Alger posing in a large white furry hat with a cylindrical shape'
            className='about-photo-row-photo'
          />
          <img
            src={RealDragFace}
            alt='Codi Alger replicating the expression of a several foot tall canvas making a dramatic face with smeared makeup'
            className='about-photo-row-photo'
          />
          <img
            src={RealBestOfMke}
            alt='Codi Alger at the Best of MKE 2022 event, informal with behind the scenes energy, Codi is squatting down and eating with her purse and drink on the ground next to her'
            className='about-photo-row-photo'
          />
          <img
            src={RealDiva}
            alt='Codi Alger posing in front of a modern family character holding a letter board sign reading "Diva"'
            className='about-photo-row-photo'
          />
          <img
            src={RealCat}
            alt='Codi Alger petting a stray orange & white cat atop a flower bed beneath a tree'
            className='about-photo-row-photo'
          />
          <img
            src={RealNature}
            alt='Codi Alger selfie with sunglasses in front of a lovely fall outside background'
            className='about-photo-row-photo'
          />
        </div>
        <p>
          Before real estate, I spent years in education; both higher ed and
          non-profit work in Milwaukee county. My strong education background is
          what drives me to educate my clients along the way.{' '}
          <strong className='about-text-emphasized'>
            I am optimistic and solution driven and I believe that everyone
            should have a seamless path to homeownership should they want one!
          </strong>
        </p>
        <div className='about-photo-row'>
          <img
            src={RealGenerationHeartPants}
            alt='Codi Alger standing with her daughter and mother while wearing jeans with colorful hearts in a rainbow order down the legs'
            className='about-photo-row-photo'
          />
          <img
            src={RealBucksFamily}
            alt='Codi Alger standing with her family in the Bucks arena wearing Bucks gear, big fan energy'
            className='about-photo-row-photo'
          />
          <img
            src={RealMural}
            alt='Codi Alger standing with her daughter in front of a mural in Black Cat Alley in downtown Milwaukee'
            className='about-photo-row-photo'
          />
          <img
            src={RealHusband}
            alt='Codi Alger standing with her husband in discovery world in downtown Milwaukee'
            className='about-photo-row-photo'
          />
          <img
            src={RealDaughter}
            alt='Codi Alger standing in front of a convex mirrow with her daughter outside with foliage around the mirror and a lighthouse in the background'
            className='about-photo-row-photo'
          />
          <img
            src={RealFamilyCopper}
            alt='Codi Alger sitting at a table with her family at the Copper Kitchen in Bayview, Milwaukee'
            className='about-photo-row-photo'
          />
        </div>
      </div>
    </PageContainer>
  )
}
