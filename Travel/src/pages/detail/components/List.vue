<template>
  <div>
    <div class="item"
    v-for="(item,index) of categoryList"
    :key="index">
      <div class="item-title border-bottom">
          <span class="item-title-icon"></span>
          <span>{{item.title}}</span>
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .item-title
    // line-height .8rem
    // font-size .32rem
    // padding 0 .2rem
    // text-align left
    font-size: .32rem;
    line-height: .44rem;
    font-weight: bold;
    color: #212121;
    align-items: baseline;
    display: flex;
    padding-top: .28rem;
    position relative
    left .2rem
    .item-title-icon
      background-image: linear-gradient(126deg,#00e0ca 0,#00bfd4 100%);
      border-radius: .06rem;
      height: .24rem;
      min-width: .08rem;
      margin-right: .12rem;
  .item-children
    padding 0 .2rem
</style>
