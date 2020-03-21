<template>
  <div class="chart-sales-volume-monitoring">
    <h1 class="chart-sales-volume-monitoring__main-title">Мониторинг объема продаж по данным Х5 RETAIL GROUP</h1>
    <div class="chart-sales-volume-monitoring__body">
      <div class="chart-sales-volume-monitoring__left">
        <BaseLines
          lines-id="chart-sales-volume-monitoring-prod"
          :input-data="sales.prods"
        ></BaseLines>
        <BaseLines
          lines-id="chart-sales-volume-monitoring-notprod"
          :input-data="sales.notProds"
        ></BaseLines>
        <BaseLines
          lines-id="chart-sales-volume-monitoring-water"
          :input-data="sales.water"
        ></BaseLines>
      </div>
      <div class="chart-sales-volume-monitoring__right">
        <BaseSidebarTable
          title="ТОП-5 ПОЗИЦИЙ СНИЖЕНИЯ ОБЪЕМА ПРОДАЖ Х5 RETAIL GROUP"
          color-scheme="green"
          :items="topGreen.items"
        ></BaseSidebarTable>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLines from "@/components/BaseLines";
import BaseSidebarTable from "@/components/BaseSidebarTable";

export default {
  name: 'ChartSalesVolumeMonitoring',
  data() {
    return {
      topRed: this.$store.state.salesVolumeMonitoring.topRed,
      topGreen: this.$store.state.salesVolumeMonitoring.topGreen,
      sales: {
        prods: this.$store.state.salesVolumeMonitoring.sales.prods,
        notProds: this.$store.state.salesVolumeMonitoring.sales.notProds,
        water: this.$store.state.salesVolumeMonitoring.sales.water,
      },
    };
  },
  components: {BaseSidebarTable, BaseLines},
};
</script>

<style lang="sass" scoped>
.chart-sales-volume-monitoring
  position: relative

  &__body
    display: flex
    flex-direction: row
    justify-content: space-between

  &__left
    width: 70%

    & > *
      margin-bottom: 20px

      &:last-child
        margin-bottom: 0

  &__right
    padding-left: 20px
    width: 30%

    & > *
      margin-bottom: 20px

      &:last-child
        margin-bottom: 0
</style>
