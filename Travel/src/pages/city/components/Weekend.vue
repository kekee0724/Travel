<template>
<div>
    <div class="title">
        周末去哪儿
    </div>
    <ul>
        <li class="item border-bottom" v-for="item of weekends" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="item.title">
                </div>
                <div class="item-info">
                    <div class="item-title" v-text="item.title">
                        武汉欢乐谷
                    </div>
                    <div class="item-desc">
                        <span v-text="item.desc">来试试中国最高的弹射过山车吧~</span>
                    </div>
                </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekends: Array
  },
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
        title: '武汉必打卡',
        desc: '到武汉感受神奇的热干面之都'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg',
        title: '三峡人家',
        desc: '感受长江的水三峡的情怀，自古至今，无数骚人墨客浓墨重彩的描绘三峡，赶紧领略三峡的壮美吧！'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/4f/95a94c90ef3521.jpg_r_640x214_345412f9.jpg',
        title: '开启亲子时光',
        desc: '远离喧嚣的都市，带孩子去一个幽静，清新的天然“氧吧”，呼吸新鲜空气，亲近自然健康成长'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1507/e0/4aae49007c8a64.jpg_r_640x214_65a42783.jpg',
        title: '周末出游乐翻天',
        desc: '周末，想去哪儿就去哪儿~'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/ce/0dd5b8b5f5fd2a.jpg_r_640x214_929b1bec.jpg',
        title: '玩遍楚河汉街',
        desc: '旧时的租界，现代的新街，无论白天黑夜，听它过去和现在的故事。'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@styles/varibles.styl'
    @import '~@styles/mixins.styl'
    .title
        // margin-top .1rem
        text-indent .2rem
        text-align left
        height: .44rem;
        color: #212121;
        font-size: .32rem;
        line-height: .44rem;
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%
        .item-img
            width 100%
    .item-info
        overflow hidden
        text-align left
        padding-left .18rem
        .item-title
            margin-top .26rem
            height .44rem
            color #212121
            font-size .28rem
            line-height .48rem
            ellipsis()
        .item-desc
            font-size .24rem
            line-height .54rem
            color: #616161;
            padding-right: 1.4rem;
            ellipsis()
</style>
