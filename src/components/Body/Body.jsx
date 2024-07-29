import styles from "./Body.module.css"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, Pagination, Navigation } from "swiper/modules"

const Body = () => {
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
              src='/public/img/kuzovnoj-remont-khmelnystky-360x247-1.jpg'
            ></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.imgBox}>
            <img
              className={styles.img}
              src='/public/img/-kuzovnii-remont-doclistmb.jpg'
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgBox}>
            <img className={styles.img} src='/public/img/unna(1).jpg'></img>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.text}>
        <h2>Кузовний ремонт</h2>
        <p>Кузовний ремонт одна із важлевійших процедур</p>
      </div>
    </>
  )
}

export default Body
