<template>
  <div class="app">
    <clip-loader :loading="isLoading"></clip-loader>
    <span>{{ $t('login.loggingIn') }}...</span>
  </div>
</template>
<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
export default {
  components: {
    ClipLoader,
  },
  data() {
    return {
      allowedApps: {
        social: {
          path: '/products/social',
        },
      },
      isLoading: true,
    }
  },
  mounted() {
    const token = this.$route.query.token
    const app = this.$route.query.app
    this.setCookie({ data: token })
    app in this.allowedApps
      ? (window.location.href = this.allowedApps[app].path + '/')
      : this.$router.push('/')
  },
  methods: {
    setCookie({ data }) {
      const domain =
        process.env.NODE_ENV === 'development'
          ? 'localhost'
          : `.${window.location.host.split(':')[0]}`
      console.log({ domain })
      this.$cookies.set('token', data, {
        domain,
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
    },
  },
}
</script>
<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.app span {
  margin-top: 1rem;
}
</style>
