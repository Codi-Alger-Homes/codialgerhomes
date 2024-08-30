import Sold3 from '../../assets/photos/sold/sold-3.jpg'
import Sold4 from '../../assets/photos/sold/sold-4.jpg'
import Sold9 from '../../assets/photos/sold/sold-9.jpg'
import { PageContainer, RowPhotoText } from '../../components'
import './buyers.css'

export function Buyers() {
  return (
    <PageContainer>
      <h1>Buying</h1>
      <p>
        Before real estate, I spent years in education; both higher ed and
        non-profit work in Milwaukee county. My strong education background is
        what drives me to educate my clients along the way.{' '}
        <strong className='buyers-text-emphasized'>
          I am optimistic and solution driven and I believe that everyone should
          have a seamless path to homeownership should they want one!
        </strong>
      </p>
      <div className='buyers-container'>
        <RowPhotoText
          header='No pressure approach'
          text={[
            'I understand that purchasing a home is a significant decision, and I prioritize your needs above all else. Rather than pushing you towards a sale, I focus on providing you with a wide range of options and guiding you through the decision-making process. Your satisfaction and comfort are paramount.',
          ]}
        >
          <img
            src={Sold9}
            alt='Sold house featuring two individuals, parent & child, holding a white sign with red text saying "Sold"'
            className='buyers-photo'
          />
        </RowPhotoText>

        <RowPhotoText
          header='Enjoyable experience'
          text={[
            "Buying a home doesn't have to be stressful—it can actually be enjoyable! I strive to lighten the mood and make the entire process as fun and engaging as possible. Whether it's sharing lighthearted jokes or discussing your favorite TV shows and podcasts, I aim to create a relaxed atmosphere where you feel at ease.",
          ]}
        >
          <img
            src={Sold4}
            alt='Sold house featuring a family of five, one parent & four children, holding a white sign with red text saying "Sold"'
            className='buyers-photo'
          />
        </RowPhotoText>

        <RowPhotoText
          header='Education-focused approach'
          text={[
            'I believe that knowledge is power, especially when it comes to making informed decisions about real estate. Throughout our interactions, I make it a priority to educate you on various aspects of home buying, from identifying potential red flags to understanding the nuances of property maintenance and equity growth. By empowering you with valuable insights, I help ensure that you feel confident and informed every step of the way.',
          ]}
        >
          <img
            src={Sold3}
            alt='Sold house featuring two individuals sitting on their patio railing holding a white sign with red text saying "Sold"'
            className='buyers-photo'
          />
        </RowPhotoText>
      </div>
    </PageContainer>
  )
}
