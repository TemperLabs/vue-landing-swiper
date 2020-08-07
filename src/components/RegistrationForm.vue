<template>
  <form
    id="registration-form"
    @submit="checkForm"
  >
    <div v-if="errors.length">
      <b>Пожалуйста исправьте указанные ошибки:</b>
      <ul class="registration-form-errors">
        <li v-for="error in errors" v-bind:key="error.name">
          {{ error }}
        </li>
      </ul>
    </div>
    <p class="registration-form-field">
      <label for="name" class="registration-form-label">Имя</label>
      <input
        id="name"
        class="registration-form-input"
        v-model="name"
        type="text"
        name="name"
      >
    </p>
    <p class="registration-form-field">
      <label for="email" class="registration-form-label">Email</label>
      <input
        id="email"
        class="registration-form-input"
        v-model="email"
        type="email"
        name="email"
        placeholder="example@example.com"
      >
    </p>
    <p class="registration-form-field">
      <label for="comment" class="registration-form-label">Введите коментарий</label>
      <textarea
        id="comment"
        class="registration-form-comment"
        v-model="comment"
        type="email"
        name="email"
      />
    </p>
    <div class="submit-wrap">
      <button @click='checkForm' class="registration-form-submit">Зарегистрироваться</button>
    </div>

  </form>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data () {
    return {
      errors: [],
      name: null,
      email: null,
      comment: null
    }
  },
  methods: {
    checkForm: function (e) {
      //! ! todo - переделать через обьект и конкретные свойства
      this.errors = []
      if (!this.name) this.errors.push('Введите Имя')
      if (!this.comment) this.errors.push('Заполните поле комментария')
      if (!this.email) {
        this.errors.push('Введите Email')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Введите валидный email адресс')
      }
      if (!this.errors.length) {
        this.$emit('register', {
          email: this.email,
          name: this.name
        })
      }
      e.preventDefault()
    },
    validEmail: function (email) {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style scoped>
  .registration-form-errors {
    text-align: left;
    padding-left: 20px;
    font: normal 12px/15px Montserrat;
    letter-spacing: 0;
    color: #E76400;
  }
  .registration-form-comment {
    width: 570px;
    min-height: 128px;
    padding: 10px 20px;
    border: 1px solid #E76400;
    border-radius: 4px;
  }
  .registration-form-field {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .registration-form-input {
    display: inline-block;
  padding: 11px 190px 11px 20px;
  }
  .registration-form-submit {
    padding: 11px 77px 11px 78px;
    background: #14A5DA 0 0 no-repeat;
    border-radius: 4px;
  }
  .submit-wrap {
    display: flex;
    justify-content: center;
  }
</style>
