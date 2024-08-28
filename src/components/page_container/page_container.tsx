import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HoanGraphic from '../../assets/hoan-graphic.svg'
import Logo from '../../assets/logo.svg'
import LSRLogo from '../../assets/lsr-logo.png'
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
      <div className='nav-bar'>
        <Link className='nav-link' to='/about'>
          About
        </Link>
        <Link className='nav-link' to='/buyers'>
          Buying
        </Link>
        <Link className='nav-link' to='/sellers'>
          Selling
        </Link>
        <Link className='nav-link' to='/testimonials'>
          Testimonials
        </Link>
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
          <span>Call or Text: (414)581-4409</span>
          <span>Email: codialgerhomes@gmail.com</span>
        </div>
      </div>
    </>
  )
}
