<template>
<ul class="list">
  <div v-for="(item,key) of cities" :key="key">
    <li class="item">{{key}}</li>
  </div>
</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    'cities': Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      color $bgColor
</style>
