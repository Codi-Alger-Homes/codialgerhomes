import Sold1 from '../../assets/photos/sold/sold-1.jpg'
import Sold2 from '../../assets/photos/sold/sold-2.jpg'
import Sold3 from '../../assets/photos/sold/sold-3.jpg'
import Sold7 from '../../assets/photos/sold/sold-7.jpg'
import Sold8 from '../../assets/photos/sold/sold-8.jpg'
import Sold9 from '../../assets/photos/sold/sold-9.jpg'
import { ClientReview, PageContainer } from '../../components'
import { BUYERS_REVIEWS, HOME_REVIEWS, SELLER_REVIEWS } from '../../constants'
import './testimonials.css'

export function Testimonials() {
  return (
    <PageContainer>
      <h1>Testimonials</h1>
      <div className='testimonials-container'>
        <a
          href='https://www.google.com/maps/place/Codi+Alger+Homes/@43.1181905,-88.2283668,17z/data=!3m1!4b1!4m6!3m5!1s0x880509c333b89bb3:0xa9698256dfcc75b5!8m2!3d43.1181905!4d-88.2283668!16s%2Fg%2F11j37lp8rl?entry=ttu'
          target='_blank'
          rel='noreferrer'
        >
          <button>Leave your own review on Google {'>'}</button>
        </a>
        <ClientReview key='client-review-1' review={HOME_REVIEWS[0]} />
        <ClientReview key='client-review-2' review={HOME_REVIEWS[1]} />
        <ClientReview key='client-review-3' review={HOME_REVIEWS[2]} />
        <div className='testimonials-photo-row'>
          <img src={Sold1} alt='sold house' className='testimonials-photo' />
          <img src={Sold3} alt='sold house' className='testimonials-photo' />
          <img src={Sold2} alt='sold house' className='testimonials-photo' />
        </div>
        <ClientReview key='client-review-4' review={BUYERS_REVIEWS[0]} />
        <ClientReview key='client-review-5' review={BUYERS_REVIEWS[1]} />
        <ClientReview key='client-review-6' review={BUYERS_REVIEWS[2]} />
        <ClientReview key='client-review-7' review={BUYERS_REVIEWS[3]} />
        <div className='testimonials-photo-row'>
          <img src={Sold7} alt='sold house' className='testimonials-photo' />
          <img src={Sold8} alt='sold house' className='testimonials-photo' />
          <img src={Sold9} alt='sold house' className='testimonials-photo' />
        </div>
        <ClientReview key='client-review-9' review={SELLER_REVIEWS[0]} />
        <ClientReview key='client-review-10' review={SELLER_REVIEWS[1]} />
        <ClientReview key='client-review-11' review={SELLER_REVIEWS[2]} />
        <a
          href='https://www.google.com/maps/place/Codi+Alger+Homes/@43.1181905,-88.2283668,17z/data=!3m1!4b1!4m6!3m5!1s0x880509c333b89bb3:0xa9698256dfcc75b5!8m2!3d43.1181905!4d-88.2283668!16s%2Fg%2F11j37lp8rl?entry=ttu'
          target='_blank'
          rel='noreferrer'
        >
          <button>Read more reviews on Google {'>'}</button>
        </a>
      </div>
    </PageContainer>
  )
}
