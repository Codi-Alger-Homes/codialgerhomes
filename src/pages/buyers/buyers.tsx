import { ClientReview, PageContainer } from '../../components'
import { BUYERS_REVIEWS } from '../../constants'
import './buyers.css'

export function Buyers() {
  return (
    <PageContainer>
      <h1>Buyers</h1>
      
      <ClientReview review={BUYERS_REVIEWS[0]} />
      <ClientReview review={BUYERS_REVIEWS[1]} />
      <ClientReview review={BUYERS_REVIEWS[2]} />
      <ClientReview review={BUYERS_REVIEWS[3]} />
    </PageContainer>
  )
}