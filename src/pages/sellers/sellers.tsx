import CodiHelping from '../../assets/photos/codi/real-painting.jpg'
import SignSon from '../../assets/photos/codi/sign-son.jpg'
import Sold5 from '../../assets/photos/sold/sold-5.jpg'
import { PageContainer, RowPhotoText } from '../../components'
import './sellers.css'

export function Sellers() {
  return (
    <PageContainer>
      <h1>Sellers</h1>
      <div className='sellers-container'>
        {/* <p>
          Seller clients appreciate working with me for several compelling
          reasons:
        </p> */}

        <RowPhotoText
          header={'Empathetic Approach'}
          text={[
            "I understand that selling a home can be an emotional process, and I prioritize empathy and compassion in my interactions with sellers. By taking the time to listen to your unique goals and concerns, I tailor a personalized plan that not only meets but exceeds your expectations. Whether it's lending a helping hand with tasks like cleaning or providing emotional support during the transition, I am committed to easing any feelings of overwhelm and ensuring a positive experience for you.",
          ]}
        >
          <img
            src={SignSon}
            alt='Codi\&apos;s son posing adjacent to a "For Sale" sign with Codi\&apos;s branding.'
            className='sellers-'
          />
        </RowPhotoText>

        <div>
          <h2>Extensive network of professional connections</h2>
          <p>
            I leverage my extensive network of professional vendors to ensure
            your home is market-ready. From minor touch-ups like paint
            refreshment to more significant renovations such as electrical
            updates, I have reliable solutions in place to streamline the
            preparation process. By collaborating with trusted experts, I ensure
            that your home is presented in the best possible light, attracting
            potential buyers and maximizing its appeal on the market.
          </p>
        </div>

        <RowPhotoText
          header={'Access to a large buyer pool'}
          text={[
            'As a listing agent who also works with buyers, I offer a unique advantage by tapping into a large pool of qualified buyers. My comprehensive marketing plan is tailored to appeal to your target audience, ensuring maximum exposure and attracting a diverse range of interested parties. Additionally, I often have qualified buyers of my own, which can expedite the selling process and minimize disruptions for you as the seller.',
          ]}
        >
          <img
            src={CodiHelping}
            alt='Codi smiling while painting a wall within a house'
            className=''
          />
        </RowPhotoText>

        <div>
          <h2>Focus on positive relationships</h2>
          <p>
            I believe in the power of collaboration and strive to foster
            positive relationships with all parties involved in the real estate
            transaction. By approaching negotiations with a win-win mindset, I
            create an environment of mutual respect and cooperation, ultimately
            enhancing the likelihood of a successful sale that exceeds your
            expectations. My reputation for professionalism and teamwork also
            extends to my vast network of agents, increasing the likelihood of
            securing offers that align with your goals.
          </p>
        </div>

        <img
          src={Sold5}
          alt='Sold house featuring two individuals holding a white sign with red text saying "Sold"'
          className=''
        />

        <p>
          In summary, my empathetic approach, professional connections, access
          to a large buyer pool, and focus on positive relationships make me a
          trusted partner for seller clients seeking a seamless and rewarding
          selling experience.
        </p>
      </div>
    </PageContainer>
  )
}
