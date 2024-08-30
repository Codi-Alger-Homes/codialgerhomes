import { ClientReview, PageContainer } from '../../components'
import { BUYERS_REVIEWS, HOME_REVIEWS, SELLER_REVIEWS } from '../../constants'
import Sold1 from '../../assets/photos/sold/sold-1.jpg'
import Sold2 from '../../assets/photos/sold/sold-2.jpg'
import Sold3 from '../../assets/photos/sold/sold-3.jpg'
import Sold4 from '../../assets/photos/sold/sold-4.jpg'
import Sold5 from '../../assets/photos/sold/sold-5.jpg'
import Sold6 from '../../assets/photos/sold/sold-6.jpg'
import Sold7 from '../../assets/photos/sold/sold-7.jpg'
import Sold8 from '../../assets/photos/sold/sold-8.jpg'
import Sold9 from '../../assets/photos/sold/sold-9.jpg'
import './testimonials.css'

export function Testimonials() {
  return (
    <PageContainer>
      <h1>Testimonials</h1>
      <div className='testimonials-container'>
        <ClientReview review={HOME_REVIEWS[0]} />
        <ClientReview review={HOME_REVIEWS[1]} />
        <ClientReview review={HOME_REVIEWS[2]} />
        <div className='testimonials-photo-row'>
          <img src={Sold1} alt='sold house' className='testimonials-photo' />
          <img src={Sold3} alt='sold house' className='testimonials-photo' />
          <img src={Sold2} alt='sold house' className='testimonials-photo' />
        </div>
        <ClientReview review={BUYERS_REVIEWS[0]} />
        <ClientReview review={BUYERS_REVIEWS[1]} />
        <ClientReview review={BUYERS_REVIEWS[2]} />
        <ClientReview review={BUYERS_REVIEWS[3]} />
        <div className='testimonials-photo-row'>
          <img src={Sold7} alt='sold house' className='testimonials-photo' />
          <img src={Sold8} alt='sold house' className='testimonials-photo' />
          <img src={Sold9} alt='sold house' className='testimonials-photo' />
        </div>
        <ClientReview review={SELLER_REVIEWS[0]} />
        <ClientReview review={SELLER_REVIEWS[1]} />
        <ClientReview review={SELLER_REVIEWS[2]} />
      </div>
    </PageContainer>
  )
}
