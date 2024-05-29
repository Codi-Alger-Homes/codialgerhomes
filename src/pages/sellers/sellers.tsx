import { ClientReview, PageContainer } from '../../components'
import { SELLER_REVIEWS } from '../../constants'
import './sellers.css'

export function Sellers() {
  return (
    <PageContainer>
      <h1>Sellers</h1>

      <ClientReview review={SELLER_REVIEWS[0]} />
      <ClientReview review={SELLER_REVIEWS[1]} />
      <ClientReview review={SELLER_REVIEWS[2]} />
    </PageContainer>
  )
}