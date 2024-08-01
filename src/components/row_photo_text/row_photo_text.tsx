import './row_photo_text.css'

interface IRowPhotoTextProps {
  header?: string
  text: string[]
  children: any // photo(s)
  reverse?: boolean
}

export const RowPhotoText = ({
  header,
  text,
  children, // photo(s)
  reverse = false,
}: IRowPhotoTextProps) => {
  return (
    <div className={`row-photo-text-container ${reverse ? 'reverse' : ''}`}>
      <div className='row-photo-text-photo-container'>{children}</div>
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
