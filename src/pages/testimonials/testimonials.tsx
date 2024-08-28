import { ClientReview, PageContainer } from '../../components'
import { BUYERS_REVIEWS, HOME_REVIEWS, SELLER_REVIEWS } from '../../constants'
import './testimonials.css'

export function Testimonials() {
  return (
    <PageContainer>
      <h1>Testimonials</h1>
      <div className='testimonials-container'>
        <ClientReview review={HOME_REVIEWS[0]} />
        <ClientReview review={HOME_REVIEWS[1]} />
        <ClientReview review={HOME_REVIEWS[2]} />
        
        <ClientReview review={SELLER_REVIEWS[0]} />
        <ClientReview review={SELLER_REVIEWS[1]} />
        <ClientReview review={SELLER_REVIEWS[2]} />

        <ClientReview review={BUYERS_REVIEWS[0]} />
        <ClientReview review={BUYERS_REVIEWS[1]} />
        <ClientReview review={BUYERS_REVIEWS[2]} />
        <ClientReview review={BUYERS_REVIEWS[3]} />
      </div>
    </PageContainer>
  )
}
