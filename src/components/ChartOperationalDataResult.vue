<template>
  <div class="chart-operational-data-result">
    <div class="chart-operational-data-result__block">
      <div class="chart-operational-data-result__block-desc">всего</div>
      <div class="chart-operational-data-result__block-value">19 003</div>
      <div class="chart-operational-data-result__block-desc">розничных магазинов</div>
    </div>
    <div class="chart-operational-data-result__block">
      <div class="chart-operational-data-result__block-desc">6 768</div>
      <div class="chart-operational-data-result__block-desc">сетевых</div>
    </div>
    <div class="chart-operational-data-result__block">
      <div class="chart-operational-data-result__block-desc">19 003</div>
      <div class="chart-operational-data-result__block-desc">не сетевых</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartOperationalDataResult',
  props: [
    'totalStores',
    'netStores',
    'notNetStores',
  ],
};
</script>

<style lang="sass" scoped>
.chart-operational-data-result
  &__block
    margin-bottom: 7px

    &:last-child
      margin-bottom: 0

    &-value
      font-family: PTSansBold
      font-weight: 500
      font-size: 32px
      text-align: center
      line-height: 1
      word-wrap: break-word
    &-desc
      font-family: PTSansRegular
      font-size: 14px
      text-align: center
      text-transform: uppercase
      word-wrap: break-word
</style>
