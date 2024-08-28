import {
  ClientReview,
  FramedPhoto,
  PageContainer,
  RowPhotoText,
} from '../../components'
import { HOME_HEADER, HOME_REVIEWS } from '../../constants'
import CodiBestOfMKEFormal from '../../assets/photos/codi/formal-best-of-mke.jpg'
import CodiBestOfMKEReal from '../../assets/photos/codi/real-best-of-mke.jpg'
import Sold6 from '../../assets/photos/sold/sold-6.jpg'
import Sold8 from '../../assets/photos/sold/sold-8.jpg'
import './home.css'

export function Home() {
  return (
    <PageContainer>
      <h1>{HOME_HEADER}</h1>
      <div className='home-container'>
        <RowPhotoText
          header='Get a realtor who can do both'
          text={[
            "Whether you're looking to buy for the first time, unexpectedly selling a family home, or just looking to upsize - I'm here to help!",
            "Getting into the market often yields confusion and uncertainty, and I'm here to dispel myths and educate away the rumors.",
          ]}
        >
          <div className='home-photo-1-container'>
            <FramedPhoto
              src={CodiBestOfMKEFormal}
              alt={
                'Codi Alger at the Shepherd Express Best of MKE 2022, formal photo on a red carpet against an event backdrop, wearing a black long sleeve open back top with burnt orange flared trousers'
              }
              frameColor='tan'
              imgTagClassName='home-photo-1'
            />
            <FramedPhoto
              src={CodiBestOfMKEReal}
              alt={
                'Codi Alger at the Best of MKE 2022 event, informal photo with behind the scenes energy, Codi is squatting down and eating with her purse and drink on the ground next to her'
              }
              frameColor='tan'
              imgTagClassName='home-photo-1'
            />
          </div>
        </RowPhotoText>

        <div className='home-section-2-container'>
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
        </div>
      </div>
    </PageContainer>
  )
}
