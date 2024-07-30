import styles from "./Slaider.module.css"
import sprite from "../../../public/sprite.svg"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, Pagination, Navigation } from "swiper/modules"
import Comments from "../Comments/Comments"

const Slaider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swip}
      >
        <SwiperSlide>
          <div className={styles.imgBox}>
            <img
              className={styles.img}
              src='/public/img/270d0-2021-jaguar-f-type.jpg'
            ></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.imgBox}>
            <img
              className={styles.img}
              src='/public/img/7594ce72-eed721d62acaf70de036fae71fbe88d2.jpg'
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgBox}>
            <img
              className={styles.img}
              src='/public/img/02fa3aef-6823-4193-8ad5-be9e1f997e96.jpg'
            ></img>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.textBox}>
        <h2 className={styles.titel}>IG-Service</h2>
        <p className={styles.text}>Виконуємо работи будь якої складності</p>
        <div className={styles.slaiderWrap}>
          <div className={styles.svgBox}>
            <svg className={styles.slaiderSvg}>
              <use href={`${sprite}#repair-tools`}></use>
            </svg>
            <p className={styles.slaiderText}>Ремонт</p>
          </div>
          <div className={styles.svgBox}>
            <svg className={styles.slaiderSvg}>
              <use href={`${sprite}#ef2c01de1b6cf4e8cdb0e1c15b9b24c2`}></use>
            </svg>
            <p className={styles.slaiderText}>Діагостика</p>
          </div>
          <div className={styles.svgBox}>
            <svg className={styles.slaiderSvg}>
              <use href={`${sprite}#1630709`}></use>
            </svg>
            <p className={styles.slaiderText}>Обслуговування</p>
          </div>
        </div>
      </div>
      <Comments />
      <div className={styles.locationBox}>
        <h2 className={styles.titleContacts}>Контактна информація</h2>
        <div className={styles.location}>
          <div className={styles.locationList}>
            <h3 className={styles.locationTitle}>Адреса:</h3>
            <p className={styles.locationText}>Жалізничне шосе</p>
            <h3 className={styles.locationTitle}>Графік роботи:</h3>
            <p className={styles.locationText}>Пн-Пт: 10:00-18:00</p>
            <p className={styles.locationText}>Сб-Нд: Вихідні</p>
          </div>
          <div className={styles.contactsList}>
            <h3 className={styles.telTitle}>Дзвоніть для запису </h3>
            <p className={styles.numberList}>4555456754</p>
            <p className={styles.numberList}>43454553543553</p>
            <p className={styles.numberList}>3455353453535 </p>
          </div>
        </div>
        <img className={styles.imgLocation} src='/public/img/map.jpg'></img>
      </div>
    </>
  )
}

export default Slaider
