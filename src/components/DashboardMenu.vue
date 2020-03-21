<template>
  <div
    :class="{
      'dashboard-menu': true,
      'dashboard-menu--detailed': detailed,
    }"
  >
    <button
      class="dashboard-menu__toggle"
      @click="toggleDetailed()"
    >
      <div class="dashboard-menu__burger">
        <span class="dashboard-menu__burger-item"></span>
        <span class="dashboard-menu__burger-item"></span>
        <span class="dashboard-menu__burger-item"></span>
      </div>
    </button>
    <div class="dashboard-menu__items">
      <router-link
        class="dashboard-menu__item"
        v-for="(item, index) in items"
        :key="index"
        :to="item.path"
        @click="changePageTitle(item.name)"
      >
        <div class="dashboard-menu__item-icon">
          <div class="dashboard-menu__item-circle"></div>
        </div>
        <div class="dashboard-menu__item-name">{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  data() {
    return {
      detailed: false,
      items: [
        {
          name: 'Оперативные данные',
          path: '/',
        },
        {
          name: 'Мониторинг цен',
          path: '/price-monitoring',
        },
        {
          name: 'Мониторинг объема продаж по данным X5 RETAIL GROUP',
          path: '/sales-volume-monitoring',
        },
        {
          name: 'Мониторинг объема продаж по данным ФНС',
          path: '/sales-volume-fns-monitoring',
        },
        {
          name: 'Мониторинг остатков в сетевых магазинах',
          path: '/leftovers-monitoring',
        },
      ],
    };
  },
  methods: {
    toggleDetailed() {
      this.detailed = !this.detailed;
    },
    changePageTitle(pageTitle) {
      EventBus.$emit('changed-page-title', pageTitle);
    },
  },
  name: 'DashboardMenu',
};
</script>

<style lang="sass" scoped>
.dashboard-menu
  width: 64px
  height: 100vh
  position: fixed
  top: 0
  left: 0
  background-color: #ffffff
  margin: 0
  padding: 0
  box-shadow: 0 8px 24px 0 rgba(39, 44, 58, .05)
  transition: all 0.3s ease-in-out
  overflow: hidden
  z-index: 100

  &__items
    width: 200px

  &__item
    min-height: 64px
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
    cursor: pointer
    text-decoration: none
    color: #333333

    &:hover
      background-color: rgba(0, 0, 0, 0.05)

    &-icon
      width: 64px
      height: 64px
      display: flex
      flex-direction: row
      justify-content: center
      align-items: center

    &-circle
      width: 16px
      height: 16px
      background:
        color: #006cfa
      border-radius: 50%

    &-name
      padding-top: 10px
      padding-bottom: 10px
      width: 136px
      min-height: 64px
      padding-left: 24px
      padding-right: 24px
      font-family: PTSansRegular
      font-style: normal
      display: flex
      flex-direction: row
      align-items: center
      line-height: 0.9
      text-align: right

  &--detailed
    width: 200px

  &__toggle
    width: 100%
    height: 64px
    background:
      color: #ffffff
    border: 1px solid #e4e8eb
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
    cursor: pointer
    outline: none
    padding:
      left: 21px
      right: 21px

  &__burger
    width: 20px

    &-item
      display: block
      height: 3px
      margin-bottom: 3px
      background: #333333
      transition: all 0.3s ease-in-out

      &:last-child
        margin-bottom: 0

  &__toggle:hover &__burger-item
    background:
      color: #0056ff
</style>
