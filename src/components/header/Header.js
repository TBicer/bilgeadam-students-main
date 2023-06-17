import './header.css'
import Image from 'next/image'
import logo from '@/../public/bilgeadam-logo.png'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'

const Menu = () => {
  return (
    <header className='menu__container'>
      <div className='logo__container'>
        <Image src={logo} className='logo' />
        <h1 className='logo__title'>Bilgeadam Students</h1>
        <h3 className='logo__subtitle'>Front-End Developer Course</h3>
      </div>
      <nav className='nav__container'>
        <a href='#home' className='nav__link'>
          <AiOutlineHome className='nav__icon' /> Home
        </a>
        <a href='#teacher' className='nav__link'>
          <BiUser className='nav__icon' /> Teacher
        </a>
        <a href='#students' className='nav__link'>
          <FiUsers className='nav__icon' /> Students
        </a>
      </nav>
      <div className='nav__toggle'>
        <GiHamburgerMenu />
      </div>
    </header>
  )
}
export default Menu
