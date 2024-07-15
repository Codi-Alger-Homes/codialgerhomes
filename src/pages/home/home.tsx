import { ClientReview, PageContainer } from '../../components'
import { HOME_HEADER, HOME_REVIEWS } from '../../constants'
import './home.css'

export function Home() {
  return (
    <PageContainer>
      <h1>{HOME_HEADER}</h1>
      <div>

      <ClientReview review={HOME_REVIEWS[0]} />
      <ClientReview review={HOME_REVIEWS[1]} />
      <ClientReview review={HOME_REVIEWS[2]} />
      </div>
    </PageContainer>
  )
}