<template>
  <div
    class="root"
    :class="{ hidden: showModal && isMobile }"
  >
  <div class="main-page">
    <header-block/>
    <div class="section-wrapper">
      <header-slider/>
      <div class="content-wrapper" v-if="!showModal">
        <h1 class="content-title">О компании</h1>
        <div class="content-article">
          <p>
          Что-то более продвинутое делается с помощью покадровой анимации — когда для разных состояний объекта (стоит, идет, в прыжке,
          атакует) создается несколько спрайтов (двумерное изображение), которые сменяют друг друга с определенным интервалом.
          </p>
        </div>
      </div>
      <div class="content-wrapper" v-if="!showModal">
        <div class="news-header">
          <h1 class="content-title">Новости</h1>
          <span class="content-subtitle">Все новости</span>
        </div>
        <div class="content-news">
          <div class="news-img"></div>
          <div class="news-img"></div>
          <div class="news-img"></div>
        </div>
        <a class="content-loadmore" v-show="!readMoreNews" @click.prevent="activateReadMoreNews" href="#">
          Подробнее
        </a>
        <div class="content-news" v-if="readMoreNews">
          <div class="news-img"></div>
          <div class="news-img"></div>
          <div class="news-img"></div>
        </div>
      </div>
    </div>
    <RegistrationForm
      class="content-wrapper"
      @register="onLogin"
      v-if="!showModal">
    </RegistrationForm>
    <Footer
      v-if="!showModal"
    />
  </div>
  <div
    class="modal-overlay"
    v-if="showModal"
  >
    <div class="modal-overlay-inner">
      <div class="modal-overlay-content">
        <div class="modal-overlay-img"></div>
        <div class="modal-overlay-text">Благодарим за подписку</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import HeaderBlock from '@/components/Header'
import HeaderSlider from '@/components/header-slider'
import Footer from '@/components/Footer'
import RegistrationForm from '@/components/RegistrationForm'

export default {
  name: 'App',
  components: {
    Footer,
    HeaderBlock,
    HeaderSlider,
    RegistrationForm
  },
  data () {
    return {
      showModal: false,
      windowWidth: 0,
      readMoreNews: false
    }
  },
  computed: {
    isMobile () {
      return this.windowWidth <= 760
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    onLogin (data) {
      console.log('child component said login', data)
      this.showModal = true
    },
    handleResize () {
      this.windowWidth = window.innerWidth
    },
    activateReadMoreNews () {
      this.readMoreNews = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
  button,
  input,
  select,
  textarea,
  h1,h2,h3,ul,li,p,a {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    list-style: none;
    display: inline-block;
    margin: 0 10px;
  }

  a {
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }
  .content-title {
    font: Bold 32px/39px Montserrat;
    letter-spacing: 0;
    color: #000000;
    text-transform: uppercase;
  }
  .content-subtitle {
    font: normal 16px/26px Montserrat;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
  .news-header {
  display: flex;
  justify-content: space-between;
  }
  .news-img {
    display: inline-block;
  }
  .news-img:nth-child(1),
  {
    width: calc(50% - 15px);
    height: 300px;
    background: url('/images/img_3.jpg') no-repeat;
    margin-right: 30px;
  }
  .news-img:nth-child(2),
  {
    width: calc(50% - 15px);
    height: 300px;
    background: url('/images/img_2.jpg') no-repeat;
  }

  .news-img:nth-child(3),
  {
    width: 100%;
    height: 300px;
    background: url('/images/img_1.jpg') no-repeat;
    margin-top: 30px;
  }

  .modal-overlay-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modal-overlay-img {
    width: 61px;
    height: 61px;
    background: url('~@/assets/done.svg') no-repeat;
    margin-bottom: 14px;
  }
  .content-news {
    padding-bottom: 20px;
  }

  .md-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    visibility: hidden;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: 0;
    background: rgba(#e4f0e3, 0.8);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 1px) {
    .hidden {
      overflow: hidden;
      max-height: 100vh;
    }
    .slider-wrapper-outer {
      display: block;
      position: relative;
      margin-top: 80px;
    }
    .header {
      position: fixed;
      display: block;
      height: 40px;
      width: 100%;
      background: #DCE5E9;
      opacity: 1;
      top: 0;
    }
    .btn-burger {
      display: block;
      position: relative;
      width: 42px;
      height: 40px;
      z-index: 2;
      border: none;
    }

    .btn-burger .btn__f {
      position: absolute;
      top: 28px;
      right: 15px;
      width: 28px;
      border-radius: 6px;
    }

    .btn__f {
      display: block;
      background-color: #111;
      height: 3px;
      width: 100%;
      transition: all .2s ease-out;
    }

    .btn-burger .btn__f:first-child {
      top: 11px;
      width: 20px;
    }
    .btn-burger .btn__f:nth-child(2) {
      top: 16px;
      width: 20px;
    }
    .btn-burger .btn__f:nth-child(3) {
      top: 21px;
      width: 20px;
    }
    .header-slider {
      height: 240px;
      background: dodgerblue;
    }
    .modal-overlay {
      margin: auto;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #ffffff;
      width: 100%;
      height: auto;
      padding: 15px;
      z-index: 2000;
    }
    .modal-overlay-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      box-shadow: 0px 0px 6px #00000029;
    }
    .modal-overlay-text {
      font: 600 20px/24px Montserrat;
    }
    .main-page {
      padding-top: 140px;
    }
  }

  @media (min-width: 768px) {
    .btn-burger {
      display: none;
    }
    .content-wrapper {
      margin: 0 auto;
      width: 1370px;
    }
    .content-article {
      max-width: 770px;
    }
    .content-p {
      font: Regular 16px/26px Montserrat;
      margin-bottom: 50px;
    }
    .content-title {
      align-self: flex-start;
      text-align: center;
      font: Bold 32px/39px Montserrat;
      letter-spacing: 0px;
      margin-bottom: 30px;
      color: #000000;
      text-transform: uppercase;
    }
    .content-loadmore {
      text-align: center;
      font: SemiBold 14px/18px Montserrat;
      letter-spacing: 0px;
      color: #000000;
      text-transform: uppercase;
      opacity: 1;
    }
    .modal-overlay {
      position: relative;
      margin: 148px auto;
      width: 1000px;
      height: 380px;
      background: #FFFFFF;
    }
    .modal-overlay-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 10px #00000029;
      border-radius: 1px;
    }
  }

  @media (min-width: 1024px) {
    .btn-burger {
      font-size: 18px;
    }
  }
</style>
