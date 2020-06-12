<template>
  <div>
    <div class="tab-con">
      <ul>
        <li class="li active">
          境内
        </li>
        <li class="li">
          境外·港澳台
        </li>
      </ul>
    </div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      >
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li
          class="search-item border-bottom"
          v-show="hasNoData"
        >
          没有找到匹配城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
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
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
            value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
          this.list = result
        }
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .tab-con
    height: .4rem;
    line-height: .4rem;
    background-color: #00bcd4;
    padding: .2rem 1rem;
    .li
      width: 50%;
      float: left;
      text-align: center;
      background-color: #00bcd4;
      font-size: .28rem;
      color: #fff;
    .active
      background-color: #fff;
      color: #00bcd4;
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      // flex: 1;
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
      background-color: #fff
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 2.38rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
      color #666
</style>
