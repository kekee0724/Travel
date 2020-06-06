<template>
    <div>
    <city-header :city="city"></city-header>
    </div>
</template>

<script>
import CityHeader from './components/Header'
// import HomeSwiper from './components/Swiper'
// import HomeIcons from './components/Icons'
// import HomeRecommend from './components/Recommend'
// import HomeWeekend from './components/Weekend'
// import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader
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

</style>
