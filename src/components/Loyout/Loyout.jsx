import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import styles from "./Loyout.module.css"
import { useState } from "react"

const Loyout = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  return (
    <div className={styles.box}>
      <Header onVisible={setMenuVisible} />
      <div className={styles.container}>
        {menuVisible && (
          <Sidebar visible={menuVisible} onVisible={setMenuVisible} />
        )}
        <Outlet />
      </div>
    </div>
  )
}

export default Loyout
