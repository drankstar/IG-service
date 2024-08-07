import styles from "./Header.module.css"
import sprite from "../../../public/sprite.svg"

const Header = ({ visible, onVisible }) => {
  const openMenu = () => {
    onVisible(true)
    console.log(openMenu, "sasda")
  }

  return (
    <div className={styles.headerBox}>
      <button className={styles.burgerMenu} onClick={openMenu}>
        <svg className={styles.linkSvgMenu}>
          <use href={`${sprite}#burger-menu`}></use>
        </svg>
      </button>

      <a href='/'>
        <img className={styles.logo} src='/image/ig-logo.png'></img>
      </a>
      <div className={styles.svgPhone}>
        <svg className={styles.linkSvgPhone}>
          <use href={`${sprite}#phone-call`}></use>
        </svg>
        <div className={styles.headerContacts}>
          <h2 className={styles.headerTitle}>Наші контакти:</h2>
          <p className={styles.headerText}>6546565651</p>
          <p className={styles.headerText}>6546565651</p>
        </div>
      </div>
      <div className={styles.headerLink}>
        <a href='http/#'>
          <svg className={styles.linkSvg}>
            <use href={`${sprite}#facebook`}></use>
          </svg>
        </a>
        <a href='http/#'>
          <svg className={styles.linkSvg}>
            <use href={`${sprite}#instagram-logo`}></use>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Header
