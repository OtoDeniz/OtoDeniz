<template>
  <div v-if="show" class="mobile-container">
    <div @click="emitShow" class="menu-close">
     <img src="/close.svg" alt="">
    </div>
    <div class="mobile-menu">
      <ul>
        <li><a href="#anasayfa" @click="emitShow">Ana Sayfa</a></li>
        <li><a href="#hakkımızda" @click="emitShow">Hakkımızda</a></li>
        <li><a href="#ürünler" @click="emitShow">Öne Çıkan Ürünler</a></li>
        <li><a href="#mobile-footer" @click="emitShow">İstek Listesi </a></li>
        <li><a href="#map" @click="emitShow">Harita</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitShow() {
      this.$emit("show", false);
    }
  }
};
</script>
<style lang="less" scoped>
.menu-close {
  width: 100%;
  display: grid;
  justify-content: end;
  padding: 1rem;
  img {
      width: 2rem;
      margin-right: 1rem;
  }
}
.mobile-container {
    width: 100%;
}
.mobile-menu {
  position: absolute;
  width: 100%;
  background-color: @yellow;
  display: flex;
  text-align: left;
  z-index: 1;
  height: 100vh;
}
ul {
  padding: 0;
  width: 100%;
}
li {
  text-align: left;
  padding: 1rem;
  width: 100%;
  border-bottom: 0.3px solid rgba(216, 178, 54, 0.5);

  a {
    color: @dark;
    font-size: 2rem;
  }
}
</style>
