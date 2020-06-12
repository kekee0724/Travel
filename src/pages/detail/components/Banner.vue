<template>
  <div>
    <div class="banner">
      <img
        class="banner-img"
        :src="bannerImg"
        @click="handleClick"
      >
      <div class="banner-info">
        <div
          class="banner-title"
          v-text="sightName"
        />
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <common-fade-animation>
      <common-gallery
        :gallary-imgs="gallaryImgs"
        v-show="showGallery"
        @close="handleClick"
      />
    </common-fade-animation>
  </div>
</template>

<script>
import CommonGallery from '@common/gallery/Gallery'
import CommonFadeAnimation from '@common/fade/Fade'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    CommonFadeAnimation
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    sightName: String,
    // eslint-disable-next-line vue/require-default-prop
    bannerImg: String,
    // eslint-disable-next-line vue/require-default-prop
    gallaryImgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleClick () {
      this.showGallery = !this.showGallery
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0
        , 0), rgba(0, 0, 0, .8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
