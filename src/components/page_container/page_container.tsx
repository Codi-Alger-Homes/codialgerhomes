import Logo from '../../assets/logo.svg'
import HoanGraphic from '../../assets/hoan-graphic.svg'
import { Link } from 'react-router-dom'
import './page_container.css'
import { CallToAction } from '..'

interface IPageContainerProps {
  children: any
}

export function PageContainer({ children }: IPageContainerProps) {
  return (
    <div className='page-container'>
      <PageHeader />
      {children}
      <PageFooter />
    </div>
  )
}

export function PageHeader() {
  return (
    <div className='page-header-container'>
      <div className='page-header-left'>
        <img src={Logo} alt='logo' className='logo' />
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
    <div className='page-footer-container'>
      <div>
        <span>Call or text: (414)581-4409</span>
        <span>Email: codialgerhomes@gmail.com</span>
      </div>
      <img src={HoanGraphic} alt='hoan graphic' className='hoan-graphic' />
    </div>
  )
}
