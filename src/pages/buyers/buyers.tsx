import {
  ClientReview,
  FramedPhoto,
  PageContainer,
  RowPhotoText,
} from '../../components'
import { BUYERS_REVIEWS } from '../../constants'
import Sold9 from '../../assets/photos/sold/sold-9.jpg'
import Sold4 from '../../assets/photos/sold/sold-4.jpg'
import Sold3 from '../../assets/photos/sold/sold-3.jpg'
import './buyers.css'

export function Buyers() {
  return (
    <PageContainer>
      <h1>Buyers</h1>
      <div className='buyers-container'>
        <RowPhotoText
          header='No pressure approach'
          text={[
            'I understand that purchasing a home is a significant decision, and I prioritize your needs above all else. Rather than pushing you towards a sale, I focus on providing you with a wide range of options and guiding you through the decision-making process. Your satisfaction and comfort are paramount.',
          ]}
        >
          <FramedPhoto
            src={Sold9}
            alt='Sold house featuring two individuals, parent & child, holding a white sign with red text saying "Sold"'
            imgTagClassName='buyers-photo'
          />
        </RowPhotoText>

        <ClientReview review={BUYERS_REVIEWS[0]} />
        <ClientReview review={BUYERS_REVIEWS[1]} />

        <RowPhotoText
          header='Enjoyable experience'
          text={[
            "Buying a home doesn't have to be stressful—it can actually be enjoyable! I strive to lighten the mood and make the entire process as fun and engaging as possible. Whether it's sharing lighthearted jokes or discussing your favorite TV shows and podcasts, I aim to create a relaxed atmosphere where you feel at ease.",
          ]}
        >
          <FramedPhoto
            src={Sold4}
            alt='Sold house featuring a family of five, one parent & four children, holding a white sign with red text saying "Sold"'
            imgTagClassName='buyers-photo'
          />
        </RowPhotoText>

        <ClientReview review={BUYERS_REVIEWS[2]} />
        <ClientReview review={BUYERS_REVIEWS[3]} />

        <RowPhotoText
          header='Education-focused approach'
          text={[
            'I believe that knowledge is power, especially when it comes to making informed decisions about real estate. Throughout our interactions, I make it a priority to educate you on various aspects of home buying, from identifying potential red flags to understanding the nuances of property maintenance and equity growth. By empowering you with valuable insights, I help ensure that you feel confident and informed every step of the way.',
          ]}
        >
          <FramedPhoto
            src={Sold3}
            alt='Sold house featuring two individuals sitting on their patio railing holding a white sign with red text saying "Sold"'
            imgTagClassName='buyers-photo'
          />
        </RowPhotoText>

        <p>
          Overall, my commitment to providing a pressure-free, enjoyable, and
          educational experience sets me apart as a buyer's agent. I'm dedicated
          to helping you find the perfect home that not only meets your current
          needs but also aligns with your long-term goals and aspirations.
        </p>
      </div>
    </PageContainer>
  )
}
