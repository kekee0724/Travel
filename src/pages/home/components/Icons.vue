<template>
  <div class="icons">
    <!-- :options="swiperOptions -->
    <swiper
      :options="swiperOptions"
      v-if="showSwiper"
    >
      <swiper-slide
        v-for="(page,index) of pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img
              v-if="typeof item.iconfont==='undefined'"
              class="icon-img-content"
              :src="item.imgUrl"
            >
            <div
              v-else-if="typeof item.imgUrl==='undefined'"
              class="iconfont icon-iconfont"
              v-html="item.iconfont"
            />
            <p
              class="icon-desc"
              v-text="item.desc"
            />
          </div>
        </div>
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      />
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      iconList: [{
        id: '101',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '102',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '103',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '户部巷'
      }, {
        id: '104',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '自然风光'
      }, {
        id: '105',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      }, {
        id: '106',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '武汉必游'
      }, {
        id: '107',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
        desc: '三峡风光'
      }, {
        id: '108',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
        desc: '武汉欢乐谷'
      }, {
        id: '109',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        desc: '极地海洋'
      }, {
        id: '110',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
        desc: '东湖绿道'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper () {
      return this.icons.length
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@styles/varibles.styl'
    @import '~@styles/mixins.styl'
    .icons >>> .swiper-container
        height 0
        padding-bottom 42%
    .icons >>> .swiper-pagination-bullet-active
        background #ffffff
    .icons
        margin-top .1rem
        // overflow hidden
        // height 0
        // padding-bottom 33.33%
        .icon
            position relative
            // overflow hidden
            float left
            width 25%
            padding-bottom 20.75%
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                .icon-img-content
                    margin 0
                    height 100%
                .icon-iconfont
                    margin 0
                    height 100%
                    text-align center
                    font-size .75rem
            .icon-desc
                position absolute
                left 0
                right 0
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor
                ellipsis()
 </style>
