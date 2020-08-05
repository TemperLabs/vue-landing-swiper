<template>
  <div class="main-page">
    <header-menu/>
    <div class="section-wrapper">
      <header-slider/>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import HeaderSlider from '@/components/header-slider'
export default {
  name: 'App',
  components: {
    HeaderMenu,
    HeaderSlider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  @media (min-width: 1px) {
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
  }

  @media (min-width: 768px) {
    .btn-burger {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .btn-burger {
      font-size: 18px;
    }
  }
</style>
