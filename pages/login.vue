<template>
  <div class="app">
    <div class="app-container">
      <app-logo class="logo" />
      <hr />
      <kozmonos-logo class="logo" />
    </div>
    <hr />
    <p v-html="$t('login.description')">
    </p>
    <button @click="login">{{$t("login.ok")}}</button>
  </div>
</template>
<script>
import kozmonosLogo from '~/static/assets/images/kozmonos-logo.svg?inline'
export default {
  components: {
    kozmonosLogo,
  },
  data() {
    return {
      allowedApps: {
        social: {
          path: '/social',
        },
      },
    }
  },
  methods: {
    setCookie({ data }) {
      this.$cookies.set('token', data, {
        domain: '.donoteffort.com',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
    },
    login() {
      const token = this.$route.query.token
      const app = this.$route.query.app

      this.setCookie({ data: token })

      app in this.allowedApps 
        ? window.location.href = this.allowedApps[app].path + "/"
        : this.$router.push('/')
    },
  },
}
</script>
<style scoped>
.app {
  width: 90vw;
  margin: auto;
  margin-top: 5vh;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #1a1a1a;
  border-radius: 30px;
  min-height: 400px;
  min-width: 400px;
}

.logo {
  height: 6rem;
  width: auto;
}

.app-container {
  display: flex;
  padding: 50px;
  padding-top: 0;
  justify-content: center;
}

.app-container hr {
  margin: 10px 30px;
}

.app > hr {
  width: 60%;
  border-color: #ffffff45;
}

button {
  padding: 15px 30px;
  border-radius: 30px;
  color: white;
  background-color: transparent;
  margin-top: 20px;
  border: 1px solid #a78fed;
  transition: 0.3s;
}

button:hover {
  background-color: #a78fed;
}

</style>
<style>
.kozmonos {
  color: #ff6308;
}
</style>