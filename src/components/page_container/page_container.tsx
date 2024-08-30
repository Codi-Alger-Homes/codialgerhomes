import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HoanGraphic from '../../assets/hoan-graphic.svg'
import CAHLogoDark from '../../assets/logos/cah-logo-dark-yellow.png'
import LSRLogo from '../../assets/lsr-logo.png'
import RealtorTrademark from '../../assets/realtor-trademark.jpg'
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
      <div className='page-header-logo-container'>
        <img
          src={CAHLogoDark}
          alt='logo'
          className='logo'
          onClick={handleLogoClick}
        />
      </div>
      <div>
        <em>Making South Eastern Wisconsin cooler, one neighbor at a time.</em>
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
        <div className='page-footer-logos'>
          <img
            src={LSRLogo}
            alt='Lannon Stone Realty logo'
            className='page-footer-lsr-logo'
          />
          <img
            src={RealtorTrademark}
            alt='Realtor trademark logo'
            className='page-footer-realtor-logo'
          />
        </div>
        <div className='nav-bar'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/about'>
            About
          </Link>
          <Link className='nav-link' to='/buying'>
            Buying
          </Link>
          <Link className='nav-link' to='/selling'>
            Selling
          </Link>
          <Link className='nav-link' to='/testimonials'>
            Testimonials
          </Link>
        </div>
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
