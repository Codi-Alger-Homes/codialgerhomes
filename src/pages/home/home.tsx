import { ClientReview, PageContainer } from '../../components'
import { HOME_REVIEWS } from '../../constants'
import './home.css'

export function Home() {
  return (
    <PageContainer>
      <h1>Welcome!</h1>
      <div>

      <ClientReview review={HOME_REVIEWS[0]} />
      <ClientReview review={HOME_REVIEWS[1]} />
      <ClientReview review={HOME_REVIEWS[2]} />
      </div>
    </PageContainer>
  )
}