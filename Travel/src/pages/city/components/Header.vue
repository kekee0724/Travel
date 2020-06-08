<template>
<div class="header">
    <div class="header-title">
        <span>城市选择</span>
        <router-link to="/">
            <div class="iconfont header-back">&#xe653;</div>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .header
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-title
      line-height $headerHeight
      text-align center
      color #fff
      background $bgColor
      font-size .32rem
      .header-back
        position absolute
        top 0
        left 0
        width: .64rem
        text-align center
        font-size .5rem
        color #fff
</style>
