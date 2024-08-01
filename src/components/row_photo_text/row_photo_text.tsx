import { FramedPhoto } from '..'
import './row_photo_text.css'

interface IRowPhotoTextProps {
  // src: string
  // alt: string
  // frameColor: string
  header: string
  text: string[]
  children: any // photo(s)
  reverse?: boolean
}

export const RowPhotoText = ({
  // src,
  // alt,
  // frameColor,
  header,
  text,
  children, // photo(s)
  reverse = false,
}: IRowPhotoTextProps) => {
  return (
    <div className={`row-photo-text-container ${reverse ? 'reverse' : ''}`}>
      <div className='row-photo-text-photo-container'>
        {/* <FramedPhoto
          src={src}
          alt={alt}
          frameColor={((frameColor as 'tan') || 'blue') ?? 'tan'}
          imgTagClassName='row-photo-text-photo'
        /> */}
        {children}
      </div>
      <div className='row-photo-text-text-container'>
        <h2>{header}</h2>
        {text.map((paragraph, index) => (
          <p key={index} className='row-photo-text-text'>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
