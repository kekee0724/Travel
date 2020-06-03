<template>
<div class="wrapper">
    <swiper :options="swiperOptions">
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
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@styles/varibles.styl'
    .wrapper >>> .swiper-pagination-bullet-active
        background #ffffff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 25.73%
        background $bgColor
        .swiper-img
            width 100%
</style>
