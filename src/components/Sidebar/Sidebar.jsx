import styles from "./Sidebar.module.css"
import { NavLink } from "react-router-dom"
import clsx from "clsx"

const Sidebar = ({ visible, onVisible }) => {
  const closeSidebar = (e) => {
    if (e.target === e.currentTarget) onVisible(false)
  }

  return (
    <div
      className={clsx(styles.SidebarBox, { [styles.visible]: visible })}
      onClick={closeSidebar}
    >
      <nav className={styles.sidebar}>
        <ul>
          <li>
            <NavLink to='/panting' className={styles.SidebarText}>
              Фарбування
            </NavLink>
          </li>
          <li>
            <NavLink to='/body' className={styles.SidebarText}>
              Кузовний ремонт
            </NavLink>
          </li>
          <li>
            <NavLink to='/polising' className={styles.SidebarText}>
              Полірування
            </NavLink>
          </li>
          <li>
            <NavLink to='/replacing' className={styles.SidebarText}>
              Заміна деталей
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
