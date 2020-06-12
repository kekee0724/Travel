<template>
  <div>
      <router-link tag="div" to="/" class="header-abs" v-show="showABs">
        <div class="iconfont header-abs-back">&#xe653;</div>
      </router-link>
      <div class="header-fixed" v-show="!showABs" :style="opacityStyle">
        <div class="header-fixed-title">
            <span>景点详情</span>
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe653;</div>
            </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  components: {
  },
  props: {
  },
  data () {
    return {
      showABs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = (opacity > 1) ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showABs = false
      } else {
        this.showABs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    line-height .8rem
    height .8rem
    border-radius .4rem
    // text-align center
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height 0
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fixed-title
      line-height $headerHeight
      text-align center
      color #fff
      background $bgColor
      font-size .32rem
      .header-fixed-back
        position absolute
        top 0
        left 0
        width: .64rem
        text-align center
        font-size .5rem
        color #fff
</style>
