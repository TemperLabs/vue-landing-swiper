(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],m=0,d=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},i={app:0},n=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-landing-swiper/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"03b8":function(e,t,s){"use strict";var a=s("fd86"),i=s.n(a);i.a},"0c37":function(e,t,s){"use strict";var a=s("82a8"),i=s.n(a);i.a},"56ae":function(e,t,s){"use strict";var a=s("eb00"),i=s.n(a);i.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"root",class:{hidden:e.showModal&&e.isMobile}},[s("div",{staticClass:"main-page"},[s("header-block"),s("div",{staticClass:"section-wrapper"},[s("header-slider"),e.showModal?e._e():s("div",{staticClass:"content-wrapper"},[e._m(0)]),e.showModal?e._e():s("div",{staticClass:"content-wrapper"},[e._m(1),e._m(2),s("a",{directives:[{name:"show",rawName:"v-show",value:!e.readMoreNews,expression:"!readMoreNews"}],staticClass:"content-loadmore",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.activateReadMoreNews(t)}}},[e._v(" Подробнее ")]),e.readMoreNews?s("div",{staticClass:"content-news"},[s("div",{staticClass:"news-img"}),s("div",{staticClass:"news-img"}),s("div",{staticClass:"news-img"})]):e._e()])],1),e.showModal?e._e():s("RegistrationForm",{staticClass:"content-wrapper",on:{register:e.onLogin}}),e.showModal?e._e():s("Footer")],1),e.showModal?s("div",{staticClass:"modal-overlay"},[e._m(3)]):e._e()])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content-wrapper-inner"},[s("h1",{staticClass:"content-title"},[e._v("О компании")]),s("div",{staticClass:"content-article"},[s("p",[e._v(" Что-то более продвинутое делается с помощью покадровой анимации — когда для разных состояний объекта (стоит, идет, в прыжке, атакует) создается несколько спрайтов (двумерное изображение), которые сменяют друг друга с определенным интервалом. ")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"news-header"},[s("h1",{staticClass:"content-title"},[e._v("Новости")]),s("span",{staticClass:"content-subtitle"},[e._v("Все новости")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content-news"},[s("div",{staticClass:"news-img"}),s("div",{staticClass:"news-img"}),s("div",{staticClass:"news-img"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-overlay-inner"},[s("div",{staticClass:"modal-overlay-content"},[s("div",{staticClass:"modal-overlay-img"}),s("div",{staticClass:"modal-overlay-text"},[e._v("Благодарим за подписку")])])])}],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header",class:{openheader:e.isOpened}},[e._m(0),s("div",{staticClass:"header-inner-bottom"},[s("a",{staticClass:"logo",attrs:{href:""}},[e._v("Logotype")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isOpened,expression:"isOpened"}],staticClass:"menu-btn",attrs:{type:"checkbox",id:"menu-btn"},domProps:{checked:Array.isArray(e.isOpened)?e._i(e.isOpened,null)>-1:e.isOpened},on:{change:function(t){var s=e.isOpened,a=t.target,i=!!a.checked;if(Array.isArray(s)){var n=null,r=e._i(s,n);a.checked?r<0&&(e.isOpened=s.concat([n])):r>-1&&(e.isOpened=s.slice(0,r).concat(s.slice(r+1)))}else e.isOpened=i}}}),e._m(1),e._m(2)])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header-inner-top"},[s("span",{staticClass:"header-innner-top-text"},[e._v("Режим работы")]),s("span",{staticClass:"header-innner-top-text"},[e._v("Правила посещения")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"menu-icon",attrs:{for:"menu-btn"}},[s("span",{staticClass:"navicon"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"menu"},[s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"#"}},[e._v("menu item 1")]),s("ul",{staticClass:"menu-submenu"},[s("li",[s("a",{attrs:{href:""}},[e._v("Item 11")])]),s("li",[s("a",{attrs:{href:""}},[e._v("Item 12")])])])]),s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"#"}},[e._v("menu item 2")]),s("ul",{staticClass:"menu-submenu"},[s("li",[s("a",{attrs:{href:""}},[e._v("Item 1")])]),s("li",[s("a",{attrs:{href:""}},[e._v("Item 2")])])])]),s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"#"}},[e._v("menu item 3")]),s("ul",{staticClass:"menu-submenu"},[s("li",[s("a",{attrs:{href:""}},[e._v("Item 1")])]),s("li",[s("a",{attrs:{href:""}},[e._v("Item 2")])])])]),s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"#"}},[e._v("menu item 4")]),s("ul",{staticClass:"menu-submenu"},[s("li",[s("a",{attrs:{href:""}},[e._v("Item 1")])]),s("li",[s("a",{attrs:{href:""}},[e._v("Item 2")])])])]),s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"#"}},[e._v("menu item 5")]),s("ul",{staticClass:"menu-submenu"},[s("li",[s("a",{attrs:{href:""}},[e._v("Item 1")])]),s("li",[s("a",{attrs:{href:""}},[e._v("Item 2")])])])])])}],l={name:"Header",data:function(){return{isOpened:!1}}},c=l,u=(s("ac3c"),s("2877")),m=Object(u["a"])(c,r,o,!1,null,"e706929e",null),d=m.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("swiper",{staticClass:"swiper",attrs:{options:e.swiperOption}},[s("swiper-slide",[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"swiper-slide-image",attrs:{src:"images/slide_1.jpg"}})])]),s("swiper-slide",[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"swiper-slide-image",attrs:{src:"images/slide_2.jpg"}})])]),s("swiper-slide",[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"swiper-slide-image",attrs:{src:"images/slide_3.jpg"}})])]),s("div",{staticClass:"swiper-pagination swiper-pagination-bullets",attrs:{slot:"pagination"},slot:"pagination"}),s("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),s("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)},v=[],f=s("7212"),h=(s("a7a3"),{name:"HeaderSlider",components:{Swiper:f["Swiper"],SwiperSlide:f["SwiperSlide"]},data:function(){return{swiperOption:{observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,renderBullet:function(e,t){return'<span class="'.concat(t,' swiper-pagination-bullet-custom"></span>')}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}}}},mounted:function(){console.log("Current Swiper instance object",this.swiper)}}),w=h,_=(s("56ae"),Object(u["a"])(w,p,v,!1,null,null,null)),g=_.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header-wrapper"},[s("div",{staticClass:"header-wrapper-inner"},[s("div",{staticClass:"header-contacts"},[s("h2",{staticClass:"header-title"},[e._v(" logotype ")]),s("span",{staticClass:"header-info-text"},[e._v(" г. Москва, метро Бауманская, ул. Бауманская, дом 44 ")]),s("span",{staticClass:"header-info-phone"}),e._v(" +7 000 000 00 00 ")]),s("div",{staticClass:"header-links"})])])}],y={name:"Footer"},x=y,O=(s("03b8"),Object(u["a"])(x,b,C,!1,null,"db5c1ebe",null)),E=O.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{attrs:{id:"registration-form"},on:{submit:e.checkForm}},[e.errors.length?s("div",[s("b",[e._v("Пожалуйста исправьте указанные ошибки:")]),s("ul",{staticClass:"registration-form-errors"},e._l(e.errors,(function(t){return s("li",{key:t.name},[e._v(" "+e._s(t)+" ")])})),0)]):e._e(),s("p",{staticClass:"registration-form-field"},[s("label",{staticClass:"registration-form-label",attrs:{for:"name"}},[e._v("Имя")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"registration-form-input",attrs:{id:"name",type:"text",name:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),s("p",{staticClass:"registration-form-field"},[s("label",{staticClass:"registration-form-label",attrs:{for:"email"}},[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"registration-form-input",attrs:{id:"email",type:"email",name:"email",placeholder:"example@example.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("p",{staticClass:"registration-form-field"},[s("label",{staticClass:"registration-form-label",attrs:{for:"comment"}},[e._v("Введите коментарий")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],staticClass:"registration-form-comment",attrs:{id:"comment",type:"email",name:"email"},domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value)}}})]),s("div",{staticClass:"submit-wrap"},[s("button",{staticClass:"registration-form-submit",on:{click:e.checkForm}},[e._v("Зарегистрироваться")])])])},j=[],k=(s("b0c0"),{name:"RegistrationForm",data:function(){return{errors:[],name:null,email:null,comment:null}},methods:{checkForm:function(e){
//! ! todo - переделать через обьект и конкретные свойства
this.errors=[],this.name||this.errors.push("Введите Имя"),this.comment||this.errors.push("Заполните поле комментария"),this.email?this.validEmail(this.email)||this.errors.push("Введите валидный email адресс"):this.errors.push("Введите Email"),this.errors.length||this.$emit("register",{email:this.email,name:this.name}),e.preventDefault()},validEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}}}),$=k,S=(s("0c37"),Object(u["a"])($,M,j,!1,null,"56ca7fee",null)),P=S.exports,N={name:"App",components:{Footer:E,HeaderBlock:d,HeaderSlider:g,RegistrationForm:P},data:function(){return{showModal:!1,windowWidth:0,readMoreNews:!1}},computed:{isMobile:function(){return this.windowWidth<=760}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{onLogin:function(e){console.log("child component said login",e),this.showModal=!0},handleResize:function(){this.windowWidth=window.innerWidth},activateReadMoreNews:function(){this.readMoreNews=!0}}},I=N,F=(s("5c0b"),Object(u["a"])(I,i,n,!1,null,null,null)),R=F.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(R)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"82a8":function(e,t,s){},"9c0c":function(e,t,s){},ac3c:function(e,t,s){"use strict";var a=s("d3e5"),i=s.n(a);i.a},d3e5:function(e,t,s){},eb00:function(e,t,s){},fd86:function(e,t,s){}});
//# sourceMappingURL=app.9949adcf.js.map