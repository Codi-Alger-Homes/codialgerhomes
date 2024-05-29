import { ClientReview, PageContainer } from '../../components'
import { BUYER_REVIEWS } from '../../constants'
import './buyers.css'

export function Buyers() {
  return (
    <PageContainer>
      <h1>Buyers</h1>
      
      <ClientReview review={BUYER_REVIEWS[0]} />
      <ClientReview review={BUYER_REVIEWS[1]} />
      <ClientReview review={BUYER_REVIEWS[2]} />
      <ClientReview review={BUYER_REVIEWS[3]} />
    </PageContainer>
  )
}