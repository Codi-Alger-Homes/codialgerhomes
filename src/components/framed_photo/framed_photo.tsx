import './framed_photo.css'

interface IFramedPhotoProps {
  src: string
  alt: string
  frameColor?: 'blue' | 'tan'
}

export function FramedPhoto({ src, alt, frameColor = "blue" }: IFramedPhotoProps) {
  return (
    <div className={`framed-photo-container framed-photo-border-${frameColor}`}>
      <img src={src} alt={alt} />
    </div>
  )
}
