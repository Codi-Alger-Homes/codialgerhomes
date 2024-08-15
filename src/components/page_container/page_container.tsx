import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CallToAction } from '..'
import HoanGraphic from '../../assets/hoan-graphic.svg'
import Logo from '../../assets/logo.svg'
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
      <div className='page-header-left'>
        <img src={Logo} alt='logo' className='logo' onClick={handleLogoClick} />
        <div className='nav-bar'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/buyers'>
            Buyers
          </Link>
          <Link className='nav-link' to='/sellers'>
            Sellers
          </Link>
          <Link className='nav-link' to='/about'>
            About
          </Link>
        </div>
      </div>
      <div className='page-header-right'>
        <CallToAction />
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
      <div className='page-footer-cta-text'>
        <span>Call or Text: (414)581-4409</span>
        <span>Email: codialgerhomes@gmail.com</span>
      </div>
    </>
  )
}
