import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import HoanGraphic from '../../assets/hoan-graphic.svg'
import Logo from '../../assets/logo.svg'
import LSRLogo from '../../assets/lsr-whitelogo-final.png'
import './page_container.css'

interface IPageContainerProps {
  children: any
}

export function PageContainer({ children }: IPageContainerProps) {
  return (
    <div>
      <div className='page-container'>
        <PageHeader />
        {children}
      </div>
      <PageFooter />
    </div>
  )
}

export function PageHeader() {
  const navigate = useNavigate()

  const handleLogoClick = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <div className='page-header-container'>
      <img src={Logo} alt='logo' className='logo' onClick={handleLogoClick} />
      <div className='page-header-subtitle-container'>
        <span className='page-header-subtitle'>Buyer's Agent</span>
        <span className='page-header-subtitle'>Seller's Agent</span>
        <span className='page-header-subtitle'>Licensed Realtor &#174;</span>
      </div>
    </div>
  )
}

export function PageFooter() {
  return (
    <>
      <div className='page-footer-container'>
        <div className='hoan-graphic-container'>
          <img src={HoanGraphic} alt='hoan graphic' className='hoan-graphic' />
        </div>
      </div>
      <div className='page-footer-cta'>
        <img
          src={LSRLogo}
          alt='Lannon Stone Realty logo'
          className='page-footer-lsr-logo'
        />
        <div className='page-footer-cta-text'>
          <span>
            <strong>Call or Text:</strong> (414)581-4409
          </span>
          <span>
            <strong>Email:</strong> codialgerhomes@gmail.com
          </span>
        </div>
      </div>
    </>
  )
}
