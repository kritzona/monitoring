<template>
  <div class="chart-sales-volume-fns-monitoring">
    <h1 class="chart-sales-volume-fns-monitoring__main-title">МОНИТОРИНГ ОБЪЕМА ПРОДАЖ ПО ДАННЫМ ФНС</h1>
    <div class="chart-sales-volume-fns-monitoring__body">
      <div class="chart-sales-volume-fns-monitoring__left">
        <BaseLines
          lines-id="chart-sales-volume-fns-monitoring-prod"
          :input-data="sales.prods"
        ></BaseLines>
        <BaseLines
          lines-id="chart-sales-volume-fns-monitoring-notprod"
          :input-data="sales.notProds"
        ></BaseLines>
        <BaseLines
          lines-id="chart-sales-volume-fns-monitoring-water"
          :input-data="sales.water"
        ></BaseLines>
      </div>
      <div class="chart-sales-volume-fns-monitoring__right">
        <BaseSidebarTable
          title="ТОП-5 ПОЗИЦИЙ СНИЖЕНИЯ ОБЪЕМА ПРОДАЖ"
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
  name: 'ChartSalesVolumeFnsMonitoring',
  data() {
    return {
      topRed: this.$store.state.salesVolumeFnsMonitoring.topRed,
      topGreen: this.$store.state.salesVolumeFnsMonitoring.topGreen,
      sales: {
        prods: this.$store.state.salesVolumeFnsMonitoring.sales.prods,
        notProds: this.$store.state.salesVolumeFnsMonitoring.sales.notProds,
        water: this.$store.state.salesVolumeFnsMonitoring.sales.water,
      },
    };
  },
  components: {BaseSidebarTable, BaseLines},
};
</script>

<style lang="sass" scoped>
.chart-sales-volume-fns-monitoring
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
