import { Link } from 'react-router-dom'
import SignSon from '../../../assets/photos/codi/sign-son.jpg'
import { FramedPhoto } from '../../../components'
import './sellers.css'

export function Sellers() {
  return (
    <>
      <h1>Sellers</h1>
      <div className='sellers-container'>
        <p>
          In summary, my empathetic approach, professional connections, access
          to a large buyer pool, and focus on positive relationships make me a
          trusted partner for seller clients seeking a seamless and rewarding
          selling experience.
        </p>
        <div className='sellers-overview-container'>
          <FramedPhoto
            src={SignSon}
            alt='Codi\&apos;s son posing adjacent to a "For Sale" sign with Codi\&apos;s branding.'
          />
          <ul className='sellers-overview-bullets'>
            <li>
              <div>
                <h2>Empathetic approach</h2>
              </div>
            </li>

            <li>
              <div>
                <h2>Extensive network</h2>
              </div>
            </li>

            <li>
              <div>
                <h2>Access to a large buyer pool</h2>
              </div>
            </li>

            <li>
              <div>
                <h2>Focus on positive relationships</h2>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <p>
            I understand that selling a home can be an emotional process, and I
            prioritize empathy and compassion in my interactions with sellers.
            By taking the time to listen to your unique goals and concerns, I
            tailor a personalized plan that not only meets but exceeds your
            expectations. Whether it's lending a helping hand with tasks like
            cleaning or providing emotional support during the transition, I am
            committed to easing any feelings of overwhelm and ensuring a
            positive experience for you.
          </p>
          <p>
            I leverage my extensive network of professional vendors to maximize
            your home's appeal on the market. From minor touch-ups like paint
            refreshment to more significant renovations such as electrical
            updates, I have trusted, reliable solutions in place to streamline
            the preparation process.
          </p>
          <p>
            As a listing agent who also works with buyers, I offer a unique
            advantage by tapping into a large pool of qualified buyers. My
            comprehensive marketing plan is tailored to appeal to your target
            audience, ensuring maximum exposure and attracting a diverse range
            of interested parties.
          </p>
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
        <Link className='link-button' to='/testimonials'>
          Read sellers testimonials {'>'}
        </Link>
      </div>
    </>
  )
}
