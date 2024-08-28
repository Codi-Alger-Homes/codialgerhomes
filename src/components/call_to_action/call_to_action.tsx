import CTAHeadshot from '../../assets/photos/cta-headshot.jpg'
import './call_to_action.css'

export function CallToAction() {
  return (
    <div className='cta-container'>
      <div className='cta-top-container'>
        <div className='cta-contact-method'>
          <span>
            <strong>Call</strong> or <strong>Text</strong>
          </span>
          <span>
            <a href='tel:4145814409'>(414) 581-4409</a>
          </span>
        </div>
        <img
          src={CTAHeadshot}
          alt='headshot of codi alger in a warm, brown jacket with a colorful scarf'
          className='cta-image'
        />
      </div>
      <div className='cta-contact-method'>
        <span>
          <strong>Email</strong>
        </span>
        <span>
          <a
            href='mailto:codialgerhomes@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            codialgerhomes@gmail.com
          </a>
        </span>
      </div>
    </div>
  )
}
