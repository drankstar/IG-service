import styles from "./Polish.module.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, Pagination, Navigation } from "swiper/modules"

const Polish = () => {
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
              src='/public/img/8a842974fbf8b4802707fe29e8dfe6b2-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg'
            ></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.imgBox}>
            <img
              className={styles.img}
              src='/public/img/Polirovka_940.jpg'
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgBox}>
            <img className={styles.img} src='/public/img/inx960x640.jpg'></img>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.text}>
        <h2>Полірування</h2>
        <p>
          Полірування може з вашего авто зробити вигляд нового авто з салону
        </p>
      </div>
    </>
  )
}

export default Polish
