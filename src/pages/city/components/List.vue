<template>
  <div
    class="list"
    ref="wrapper"
  >
    <div>
      <div class="area border-topbottom">
        <div class="title">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              <!-- {{this.$store.state.city}} -->
              {{ this.currentCity }}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">
          热门城市
        </div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
          >
            <div
              class="button"
              @click="handleCityClick(item.name)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="area border-bottom"
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title">
          {{ key }}
        </div>
        <ul
          v-for="i of item"
          :key="i.id"
        >
          <li class="item-list">
            <div
              class="item"
              @click="handleCityClick(i.name)"
            >
              {{ i.name }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    'hot': Array,
    // eslint-disable-next-line vue/require-default-prop
    'cities': Object,
    // eslint-disable-next-line vue/require-default-prop
    'letter': String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // alert(city)
      // this.$store.dispatch('changeCity', city)
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
      // console.log(city)
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
      // console.log(this.letter)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  @import '~@styles/mixins.styl'
  .border-topbottom
    $:before
      border-color: #ccc
    $:after
      border-color: #ccc
  .border-bottom
    $:before
      border-color: #ccc
  .list
    overflow hidden
    position absolute
    top 2.35rem
    right 0
    bottom 0
    left 0
    .title
      line-height .44rem
      color #666
      background #eee
      padding-left .2rem
      text-align left
      font-size .26rem
    .button-list
      overflow hidden
      // 上 右 下 左
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      // float left
      // width 25%
      background #fff
      .item
        border .01rem solid #ccc
        // border-radius .06rem
        line-height: .5rem;
        color: #212121;
        // font-size: .28rem;
        // display: block;
        padding-left .2rem
        text-align left
        ellipsis()
</style>
