<template>
  <div id="app">
    <router-view></router-view>
    <upimg></upimg>
  </div>
</template>

<script>

  export default {
    components: {
      upimg
    }
  }

</script>

<style lang="scss">
  @import './assets/scss/theme.scss';
  @import './assets/scss/global.scss';
  @import './assets/scss/resetvux.scss';
  body {
    background-color: #efefef;
  }
</style>