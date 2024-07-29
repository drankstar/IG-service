import styles from "./Replacing.module.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, Pagination, Navigation } from "swiper/modules"

const Replacing = () => {
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
            <img className={styles.img} src='/public/img/_1.jpg'></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.imgBox}>
            <img className={styles.img} src='/public/img/unnamed.jpg'></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgBox}>
            <img
              className={styles.img}
              src='/public/img/vaz-kuzovny-detali-2.jpg'
            ></img>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.text}>
        <h2>Заміна деталей</h2>
        <p>
          Заміна деталей це кропотлива робота, тому що всф зазори та інші
          дрібності повинні бути ідеальні
        </p>
      </div>
    </>
  )
}

export default Replacing
