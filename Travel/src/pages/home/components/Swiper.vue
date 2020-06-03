<template>
<div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item of SwiperImgList" :key="item.id">
            <img class="swiper-img"  :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
        // pagination: {
        //   el: '.swiper-pagination'
        // }
        // Some Swiper option/callback...
      },
      SwiperImgList: [{
        id: '0001',
        imgUrl: 'http://source.qunarzz.com/site/images/wns/20200519_qunar_dujia_banner_750x192_2.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://source.qunarzz.com/site/images/wns/20200601_qunar_dujia_750x192_3.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://source.qunarzz.com/site/images/wns/20200601_qunar_dujia_banner750x192_4.jpg'
      }, {
        id: '0004',
        imgUrl: 'http://source.qunarzz.com/site/images/wns/20200602_qunar_dujia_homepage_750x192_6.jpg'
      }]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  }
  //   ,
  //   mounted () {
  //     console.log('Current Swiper instance object', this.swiper)
  //     this.swiper.slideTo(3, 1000, false)
  //   }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #ffffff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 25.73%
        background #eeeeee
        .swiper-img
            width 100%
</style>
