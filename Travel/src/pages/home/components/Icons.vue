<template>
<div class="icons">
    <swiper>
        <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-img">
                    <img v-if="typeof item.iconfont==='undefined'" class="icon-img-content" :src="item.imgUrl" />
                    <div v-else-if="typeof item.imgUrl==='undefined'" class="iconfont icon-iconfont" v-html="item.iconfont"></div>
                    <p class="icon-desc" v-text="item.text"></p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      IconList: [{
        id: '0001',
        iconfont: '&#xe678;',
        text: '周边游'
      }, {
        id: '0002',
        iconfont: '&#xe650;',
        text: '出境游'
      }, {
        id: '0003',
        iconfont: '&#xe852;',
        text: '国内游'
      }, {
        id: '0004',
        iconfont: '&#xe614;',
        text: '一日游'
      }, {
        id: '0005',
        iconfont: '&#xe619;',
        text: '签证'
      }, {
        id: '0006',
        iconfont: '&#xe609;',
        text: 'Wi-Fi'
      }, {
        id: '101',
        imgUrl: 'https://imgs.qunarzz.com/vc/fd/55/94/6c7152c2a8b35a9c49bb26ea25.png_92.png',
        text: '主题游'
      }, {
        id: '102',
        imgUrl: 'https://imgs.qunarzz.com/vc/eb/d9/1b/e24bca3f1ef6ae6ebdee15e4ca.png_92.png',
        text: '徒步登山'
      }, {
        id: '103',
        imgUrl: 'https://imgs.qunarzz.com/vc/c8/01/32/8f6e29b7b6ce0a807742c2587a.png_92.png',
        text: '深度体验'
      }, {
        id: '104',
        imgUrl: 'https://imgs.qunarzz.com/vc/c3/f2/54/2e1c8f9403de1ed28895c9ffa4.png_92.png',
        text: '亲子.游学'
      }, {
        id: '105',
        imgUrl: 'https://imgs.qunarzz.com/vc/ea/a3/be/56cdbe6026e59f876283b4414a.png_92.png',
        text: '滑雪'
      }, {
        id: '106',
        imgUrl: 'https://imgs.qunarzz.com/vc/68/4a/91/b7f09964d1e7a6280cca361c46.png_92.png',
        text: '体验潜水'
      }, {
        id: '107',
        imgUrl: 'https://imgs.qunarzz.com/vc/68/4a/91/b7f09964d1e7a6280cca361c46.png_92.png',
        text: '007'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.IconList.forEach((item, index) => {
        const page = Math.floor(index / 12)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@styles/varibles.styl'
    @import '~@styles/mixins.styl'
    .icons >>> .swiper-container
        height 0
        padding-bottom 60%
    // .icons
    //     overflow hidden
    //     height 0
    //     padding-bottom 33.33%
    .icon
        position relative
        // overflow hidden
        float left
        width 16.66%
        padding-bottom 16.66%
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
