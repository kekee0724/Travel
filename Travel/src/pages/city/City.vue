<template>
    <div>
      <city-header></city-header>
      <div id="city-container">
        <city-search></city-search>
      </div>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
// import HomeSwiper from './components/Swiper'
// import HomeIcons from './components/Icons'
// import HomeRecommend from './components/Recommend'
// import HomeWeekend from './components/Weekend'
// import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  }
  // ,
  // methods: {
  //   getHomeInfo () {
  //     axios.get('/api/index.json')
  //       .then(this.getHomeInfoSucc)
  //   },
  //   getHomeInfoSucc (res) {
  //     res = res.data
  //     if (res.ret && res.data) {
  //       const data = res.data
  //       this.city = data.city
  //       this.swiperList = data.swiperList
  //       this.iconList = data.iconList
  //       this.recommendList = data.recommendList
  //       this.weekendList = data.weekendList
  //     }
  //     console.log(res)
  //   }
  // },
  // mounted () {
  //   this.getHomeInfo()
  // }
}
</script>

<style lang="stylus" scoped>
#city-container{
              -webkit-tap-highlight-color: transparent;
              font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
              color: #212121;
              font-size: .28em;
              line-height: 1;
}
</style>
