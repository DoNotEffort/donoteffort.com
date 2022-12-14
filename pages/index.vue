<template>
  <div class="home">
    <!-- <language-changer /> -->
    <h1 style="margin:auto">Bakım Aşamasında</h1>
  </div>
</template>
<style>
.home {
  padding-bottom: 5rem;
}

pre{
  white-space: break-spaces;
}

.top {
  flex-direction: revert;
  height: 90vh;
}

@media only screen and (max-width: 768px) {
  .top .info {
    margin: 0 30px;
  }
}
</style>
<style lang="scss">
@import '@/static/assets/style/scss/mixins.scss';
@import '@/static/assets/style/scss/colors.scss';
.top {
  @include center-item($mobile: 'column-reverse');
  justify-content: space-evenly;
}

h1 {
  color: $sideColor;
  height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}
</style>
