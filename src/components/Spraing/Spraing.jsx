import styles from "./Spraing.module.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, Pagination, Navigation } from "swiper/modules"

const Spraing = () => {
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
              src='/public/img/5d4afeec163a7b1d37bef18085ba0d3f.jpg'
            ></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.imgBox}>
            <img
              className={styles.img}
              src='/public/img/istockphoto-1203343517-612x612.jpg'
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgBox}>
            <img
              className={styles.img}
              src='/public/img/pokraska-avto-v-odesse-1.jpg'
            ></img>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.text}>
        <h2>Фарбування</h2>
        <p>Фарбування одна из важлевійших частин для оновлення авто</p>
      </div>
    </>
  )
}

export default Spraing
