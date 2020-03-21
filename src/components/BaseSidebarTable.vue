<template>
  <div
    :class="[
      'base-sidebar-table',
      `base-sidebar-table--${colorScheme !== undefined ? colorScheme : 'red'}`,
    ]"
  >
    <div class="base-sidebar-table__header">{{ title }}</div>
    <div class="base-sidebar-table__items">
      <div
        class="base-sidebar-table__item"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="base-sidebar-table__item-number">{{ (index + 1) }}.</div>
        <div class="base-sidebar-table__item-name">{{ item.name }}</div>
        <div class="base-sidebar-table__item-percent">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSidebarTable',
  props: [
    'title',
    'items',
    'colorScheme',
  ],
};
</script>

<style lang="sass" scoped>
.base-sidebar-table
  width: 100%
  border: 2px solid #FF6464
  color: #FF6464

  &--red
    color: #FF6464
    border: 2px solid #FF6464
  &--red &__header
    border:
      bottom: 2px solid #FF6464

  &--green
    color: #2EBF7A
    border: 2px solid #2EBF7A
  &--green &__header
    border:
      bottom: 2px solid #2EBF7A

  &__header
    border:
      bottom: 2px solid #FF6464
    font-family: PTSansBold
    font-weight: 500
    font-style: normal
    font-size: 21px
    text-align: center
    padding:
      top: 5px
      bottom: 5px
      left: 10px
      right: 10px

  &__items

  &__item
    min-height: 48px
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    padding-left: 10px
    padding-right: 10px

    &-number
      width: 10%
      font-family: PTSansRegular
      font-style: normal
      font-size: 18px
      text-align: center

    &-name
      width: 60%
      font-family: PTSansBold
      font-weight: 500
      font-style: normal
      font-size: 18px

    &-percent
      width: 30%
      font-family: PTSansBold
      font-weight: 500
      font-style: normal
      font-size: 18px

</style>
