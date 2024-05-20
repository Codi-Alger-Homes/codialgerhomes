import './framed_photo.css'

interface IFramedPhotoProps {
  src: string
  alt: string
  frameColor?: 'blue' | 'tan'
  imgTagClassName?: string // good for setting the height of the image from outside of this component
}

export function FramedPhoto({
  src,
  alt,
  frameColor = 'blue',
  imgTagClassName,
}: IFramedPhotoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`framed-photo-container framed-photo-border-${frameColor} ${imgTagClassName}`}
    />
  )
}
