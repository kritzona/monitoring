<template>
  <div class="dashboard-content">
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DashboardContent',
};
</script>

<style lang="sass" scoped>
.dashboard-content
  width: 1280px
  min-height: 200px
  margin: 0 auto
  box-sizing: border-box
  background-color: #ffffff
  box-shadow: 0 8px 24px 0 rgba(39, 44, 58, .05)
  margin-top: 120px
  margin-bottom: 96px
  padding:
    top: 40px
    bottom: 40px
    left: 32px
    right: 32px
</style>
