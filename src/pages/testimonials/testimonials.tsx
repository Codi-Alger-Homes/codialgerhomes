import { ClientReview, PageContainer } from '../../components'
import { BUYERS_REVIEWS, SELLER_REVIEWS } from '../../constants'
import './testimonials.css'

export function Testimonials() {
  return (
    <PageContainer>
      <h1>Buyers Testimonials</h1>
      <div className='testimonials-container'>
        {BUYERS_REVIEWS.map((review) => (
          <ClientReview key={review.id} review={review} />
        ))}
      </div>
      <h1>Sellers Testimonials</h1>
      <div className='testimonials-container'>
        {SELLER_REVIEWS.map((review) => (
          <ClientReview key={review.id} review={review} />
        ))}
      </div>
    </PageContainer>
  )
}
