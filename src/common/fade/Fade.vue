<template>
  <transition>
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'CommonFadeAnimation',
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave
    opacity 0
  .v-enter-active, .v-leave-active
    transition opacity .5s
</style>
