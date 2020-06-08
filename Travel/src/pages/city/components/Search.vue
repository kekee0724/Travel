<template>
<div>
  <div class="tab-con">
      <ul>
          <li class="li active">境内</li>
          <li class="li">境外·港澳台</li>
      </ul>
  </div>
  <div class="search">
  <!-- <div class="search-input" > -->
    <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
  <!-- </div> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .tab-con
    height: .4rem;
    line-height: .4rem;
    background-color: #00bcd4;
    padding: .2rem 1rem;
    .li
      width: 50%;
      float: left;
      text-align: center;
      background-color: #00bcd4;
      font-size: .28rem;
      color: #fff;
    .active
      background-color: #fff;
      color: #00bcd4;
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      // flex: 1;
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
      background-color: #fff
</style>
