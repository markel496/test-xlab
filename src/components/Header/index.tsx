import { useEffect, useState } from 'react'
import style from './Header.module.scss'
import { ReactComponent as Logo } from './ic_logo.svg'
import { ReactComponent as PersonIcon } from './ic_person.svg'
import Menu from '../Menu'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 530

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResizeWindow)
    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 768) {
      menuActive
        ? document.body.classList.add('disable-scroll')
        : document.body.classList.remove('disable-scroll')
    }
  }, [menuActive])

  return (
    <header className={style.header}>
      <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          <Logo />
          <span className={style.text}>Wrench CRM</span>
        </div>
        {width > breakpoint && (
          <div className={style.wrapper}>
            <PersonIcon />
            <span className={style.text}>Имя Фамилия</span>
          </div>
        )}
      </div>
      <div
        className={
          !menuActive ? style.burger : style.burger + ' ' + style._active
        }
        onClick={() => setMenuActive(!menuActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={
          !menuActive
            ? style.menuContainer
            : style.menuContainer + ' ' + style._open
        }
      >
        {width < breakpoint && (
          <div className={style.wrapper + ' ' + style._fullName}>
            <PersonIcon />
            <span className={style.text}>Имя Фамилия</span>
          </div>
        )}
        <Menu />
      </div>
    </header>
  )
}

export default Header
