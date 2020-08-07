<template>
  <div
    class="header"
    :class="{ openheader : isOpened }"
  >
    <div class="header-inner-top">
      <span class="header-innner-top-text">Режим работы</span>
      <span class="header-innner-top-text">Правила посещения</span>
    </div>
    <div class="header-inner-bottom">
    <a href="" class="logo">Logotype</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" v-model="isOpened"/>
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
      <li class="menu-item">
        <a href="#">menu item 1</a>
        <ul class="menu-submenu">
          <li><a href="">Item 11</a></li>
          <li><a href="">Item 12</a></li>
        </ul>
      </li>
      <li class="menu-item">
        <a href="#">menu item 2</a>
        <ul class="menu-submenu">
          <li><a href="">Item 1</a></li>
          <li><a href="">Item 2</a></li>
        </ul>
      </li>
      <li class="menu-item">
        <a href="#">menu item 3</a>
        <ul class="menu-submenu">
          <li><a href="">Item 1</a></li>
          <li><a href="">Item 2</a></li>
        </ul>
      </li>
      <li class="menu-item">
      <a href="#">menu item 4</a>
      <ul class="menu-submenu">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
      </ul>
    </li>
    <li class="menu-item">
      <a href="#">menu item 5</a>
      <ul class="menu-submenu">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
      </ul>
    </li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      isOpened: false
    }
  }
}
</script>
<style scoped>
  .header {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
    position: fixed;
    height: 140px;
    width: 100%;
    z-index: 3;
  }
  .openheader {
    height: 100%;
  }
  .header-inner-top {
    height: 40px;
    background: #DCE5E9;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  .header-innner-top-text {
    text-align: center;
    font: 400 14px/18px Montserrat;
    letter-spacing: 0;
    align-self: center;
  }
  .header-inner-bottom {
    padding: 0;
  }

  .header li a {
    display: block;
    padding: 11px 20px 10px 20px;
    text-decoration: none;
  }

  .header li a:hover,
  .header .menu-btn:hover {
    background-color: #f4f4f4;
  }
  .menu {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    max-height: 0;
    transition: max-height .2s ease-out;
  }

  .menu-submenu {
    display: none;
  }
  .menu-item {
    position: relative;
  }
  .menu-item:hover > .menu-submenu {
    display: inherit;
    position: absolute;
    left: 140px;
    top:0;
  }

  .logo {
    display: block;
    font: bold 20px/24px Montserrat;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
  }

  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
  }

  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  .header .menu-icon .navicon:before {
    top: 5px;
  }

  .header .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .header .menu-btn {
    display: none;
  }

  .header .menu-btn:checked ~ .menu {
    max-height: 420px;
  }
  .menu-btn:checked .header {
    background-color: dodgerblue;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  @media (min-width: 48em) {
    .header-inner-top {
      padding: 0 375px;
    }
    .header-inner-bottom {
      padding: 0 375px;
    }
    .menu {
      display: inline;
      flex-direction: row;
    }

    .menu-item:hover {
      margin-bottom: 40px;
    }
    .menu-item:hover > .menu-submenu {
      display: inherit;
      position: absolute;
      top: 40px;
    }

    .header li {
      float: left;
    }
    .header li a {
      padding: 11px 30px;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }

</style>
