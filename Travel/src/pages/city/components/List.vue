<template>
<div class="list" ref="wrapper">
  <div>
    <div class="area border-topbottom">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">武汉</div>
          </div>
        </div>
    </div>
    <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">武汉</div>
          </div>
          <div class="button-wrapper">
            <div class="button">武汉</div>
          </div>
          <div class="button-wrapper">
            <div class="button">武汉</div>
          </div>
          <div class="button-wrapper">
            <div class="button">武汉</div>
          </div>
        </div>
    </div>
    <div class="area border-bottom">
        <div class="title">A</div>
        <ul>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
        </ul>
    </div>
    <div class="area border-bottom">
        <div class="title">B</div>
        <ul>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
        </ul>
    </div>
        <div class="area border-bottom">
        <div class="title">C</div>
        <ul>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
          <li class="item-list">
            <div class="item">武汉</div>
          </li>
        </ul>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
// let wrapper = document.querySelector('.wrapper')
// let scroll = new BScroll(wrapper)
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
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
