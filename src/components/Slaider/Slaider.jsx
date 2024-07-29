import styles from "./Slaider.module.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, Pagination, Navigation } from "swiper/modules"

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
      <div className={styles.text}>
        <h2>IG-Service</h2>
        <p>Наше СТО займаеться повним ремонтом Вашего авто</p>
      </div>
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
