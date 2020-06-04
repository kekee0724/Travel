<template>
<div>
    <div class="title">
        <img class="title-img" src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
        猜你喜欢
    </div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div>
                    <img class="item-img" :src="item.imgUrl" alt="item.title">
                </div>
                <div class="item-info">
                    <div class="item-title" v-text="item.title">
                        武汉欢乐谷
                    </div>
                    <div class="item-comment">
                        <span class="item-comment-star">
                                
                        </span>
                        <span class="item-comment-num" v-text="item.comment">
                            26417条评论
                        </span>
                    </div>
                    <div class="item-price-address">
                        <span style="color: #ff8300">
                            ¥
                            <em class="item-price" v-text="item.price">
                                388
                            </em>
                        </span>
                        起
                        <span><button class="item-button">查看详情</button></span>
                        <span class="item-address" v-text="item.address">青山区</span>
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
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1911/58/58502170165daf88a3.img.jpg_200x200_94d91529.jpg',
        title: '武汉欢乐谷',
        comment: '26417条评论',
        price: 388,
        address: '青山区',
        desc: '来试试中国最高的弹射过山车吧~'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1705/99/99cad7081abb9771a3.img.jpg_200x200_d86753f0.jpg',
        title: '知音号',
        comment: '1850条评论',
        price: 150,
        address: '汉口区',
        desc: '登上大型轮船，观看触及心灵的武汉故事'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2001/7f/7f3dcdcaebe1c866a3.img.jpg_200x200_08751be1.jpg',
        title: '武汉海昌极地海洋公园',
        comment: '25332条评论',
        price: 215,
        address: '东西湖区',
        desc: '在“海底两万里”鱼你共舞'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201212/20/aef8ac7cbef2738d93835fbb.jpg_200x200_adf0e996.jpg',
        title: '木兰清凉寨',
        comment: '1387条评论',
        price: 54,
        address: ' 黄陂区',
        desc: '山依水活，水依山清，山水辉映，旅游胜境'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201403/11/1f70100804193c28f8b71378c0faa49e.jpg_200x200_2b9d2349.jpg',
        title: '户部巷',
        comment: '3774条评论',
        price: 65,
        address: ' 武昌区',
        desc: '来汉味小吃第一巷搓一顿吧~'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@styles/varibles.styl'
    @import '~@styles/mixins.styl'
    .title
        margin-top .1rem
        text-indent .2rem
        text-align left
        height: .44rem;
        color: #212121;
        font-size: .32rem;
        line-height: .44rem;
        .title-img
            height .3rem
            margin-top .04rem
            vertical-align top
    .item
        margin-left: .05rem;
        display flex
        padding: .08rem 0;
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            overflow hidden
            text-align left
            padding-left .18rem
            .item-title
                margin-top .26rem
                height .44rem
                color #212121
                font-size .32rem
                line-height .44rem
                ellipsis()
            .item-comment
                .item-comment-star
                    display inline-block
                    position relative
                    color #ffb436
                    top .04rem
                    font-family 'mpiconfont'
                    letter-spacing .02rem
                .item-comment-num
                    color #616161;
                    font-size .24rem;
                    line-height .34rem;
                    vertical-align text-bottom;
            .item-price-address
                position relative;
                margin-top .22rem;
                color #616161;
                font-size .24rem
                line-height .4rem
                .item-price
                    font-size .4rem
                    color #ff8300
                .item-button
                    color #f55
                    padding 0 .1rem
                    // border-radius .06rem
                    vertical-align baseline
                .item-address
                    position absolute
                    right .24rem
                    bottom 0
            .item-desc
                display inline-block
                margin-top .25rem
                margin-right 1.6rem
                background #fff9f9
                padding .06rem .1rem
                color #f55
                font-size .24rem
                line-height .34rem
                ellipsis()
</style>
