<template>
<ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item" @click="handLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      {{item}}
    </li>
</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    'cities': Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        // if (this.cities.hasOwnProperty(i)) {
        letters.push(i)
        // }
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handLetterClick (e) {
      // 向外触发事件 city组件监听这个事件
      this.$emit('change', e.target.innerText)
      // console.lo(e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // const startY = this.$refs['A'][0].offsetTop
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 76
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
