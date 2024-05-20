import CTAHeadshot from '../../assets/photos/cta-headshot.jpg'
import { FramedPhoto } from '..'
import './call_to_action.css'

export function CallToAction() {
  return (
    <div className='cta-container'>
      <div className='cta-top-container'>
        <div className='cta-contact-method'>
          <span>
            <strong>Call</strong> or <strong>Text</strong>
          </span>
          <span>(414) 581-4409</span>
        </div>
        <FramedPhoto
          src={CTAHeadshot}
          alt='headshot of codi alger in a warm, brown jacket with a colorful scarf'
          frameColor={'tan'}
          imgTagClassName='cta-image'
        />
      </div>
      <div className='cta-contact-method'>
        <span>
          <strong>Email</strong>
        </span>
        <span>codialgerhomes@gmail.com</span>
      </div>
    </div>
  )
}
