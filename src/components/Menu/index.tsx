import style from './Menu.module.scss'
import { NavLink } from 'react-router-dom'
import {
  Home,
  Search,
  Tables,
  Calendar,
  Maps,
  Widgets,
  Settings,
  User,
  Finance,
  Exit,
} from './icons'
import { Dispatch, SetStateAction, useState } from 'react'

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? style.link + ' ' + style._active : style.link

const Menu = ({
  setMenuActive,
}: {
  setMenuActive?: Dispatch<SetStateAction<boolean>>
}) => {
  const [settingsOpen, setSettingsOpen] = useState(false)

  const clickHandler = () => {
    if (setMenuActive) {
      setMenuActive(false)
    }
  }

  return (
    <>
      <h2 className={style.title}>Меню</h2>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li onClick={clickHandler}>
            <NavLink to="/" className={setActive} end>
              <Home />
              Главная
            </NavLink>
          </li>
          <li onClick={clickHandler}>
            <NavLink to="address" className={setActive}>
              <Search />
              Поиск адресов
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={style.link}>
              <Tables />
              Таблицы
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={style.link}>
              <Calendar />
              Календарь
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={style.link}>
              <Maps />
              Карты
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={style.link}>
              <Widgets />
              Виджеты
            </NavLink>
          </li>
          <li>
            <div
              onClick={() => setSettingsOpen(!settingsOpen)}
              className={
                !settingsOpen
                  ? style.link + ' ' + style.settingsContainer
                  : style.link +
                    ' ' +
                    style.settingsContainer +
                    ' ' +
                    style.open
              }
            >
              <Settings />
              Настройки
            </div>
            <div className={style.settings}>
              <NavLink to="" className={style.link}>
                <User />
                Настройки профиля
              </NavLink>
              <NavLink to="" className={style.link}>
                <Finance />
                Управление финансами
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink to="" className={style.link}>
              <Exit />
              Выход
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
