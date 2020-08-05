<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img class="swiper-slide-image" src="images/img_1.jpg"></swiper-slide>
    <swiper-slide><img class="swiper-slide-image" src="images/img_2.jpg"></swiper-slide>
    <swiper-slide><img class="swiper-slide-image" src="images/img_3.jpg"></swiper-slide>
    <swiper-slide><img class="swiper-slide-image" src="images/slide_1.jpg"></swiper-slide>
    <swiper-slide><img class="swiper-slide-image" src="images/slide_2.jpg"></swiper-slide>
    <swiper-slide><img class="swiper-slide-image" src="images/slide_3.jpg"></swiper-slide>
    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'HeaderSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet (index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
          }
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }
      }
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
  }
}
</script>

<style lang="scss">
  @import "~swiper/swiper";
  .swiper-wrapper {
    height: 600px;
    max-height: 600px;
  }
  .swiper-slide-image {
    max-width: 100%;
    width: 100%;
    z-index: 8;
  }
  .swiper-button-next:after {
    content: '';
    background: url('~@/assets/left-arrow.svg');
    color: #DCE5E9;
    height: 22px;
    width: 32px;
    transform: rotate(180deg);
  }
  .swiper-button-prev:after {
    content: '';
    background: url('~@/assets/left-arrow.svg');
    color: #DCE5E9;
    height: 22px;
    width: 32px;
  }
  .swiper-pagination:nth-child(1) {
    width: 70px;
    height: 0px;
    border: 3px solid #14A5DA;
    opacity: 1;
  }
  .swiper {
    /deep/ .swiper-pagination-bullet-custom {
      width: 70px !important;
      height: 0px !important;
      border: 3px solid #F7F7F7;
      border-radius: 0 !important;
      opacity: 0.7;
      transition: all 500ms;
      &:hover {
        opacity: 1;
      }
      &.swiper-pagination-bullet-active {
        border: 3px solid #14A5DA;
        opacity: 1;
      }
    }
  }
</style>
