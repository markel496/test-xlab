import { Outlet } from 'react-router-dom'
import Header from './Header'
import Menu from './Menu'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <aside className="aside">
        <Menu />
      </aside>
      <main className="wrapper">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
