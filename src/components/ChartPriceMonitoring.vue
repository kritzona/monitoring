<template>
  <div class="chart-price-monitoring">
    <h1 class="chart-price-monitoring__main-title">Мониторинг цен</h1>
    <div class="chart-price-monitoring__body">
      <div class="chart-price-monitoring__left">
        <b-table sticky-header hover striped="striped" :items="table.items" :fields="table.fields" class="chart-price-monitoring__table">
          <template v-slot:thead-top>
            <b-tr>
              <b-th colspan="1" rowspan="3">№</b-th>
              <b-th colspan="1" rowspan="3">Товар</b-th>
              <b-th colspan="4" class="chart-price-monitoring__table-center">Магазины федеральных сетей</b-th>
              <b-th colspan="4" class="chart-price-monitoring__table-center">Несетевые магазины</b-th>
            </b-tr>
            <b-tr>
              <b-th colspan="4" class="chart-price-monitoring__table-center">Средние цены (руб.)</b-th>
              <b-th colspan="4" class="chart-price-monitoring__table-center">Средние цены (руб.)</b-th>
            </b-tr>
            <b-tr>
              <b-th colspan="1" class="chart-price-monitoring__table-center">Мин.</b-th>
              <b-th colspan="1" class="chart-price-monitoring__table-center">% изм. Мин.</b-th>
              <b-th colspan="1" class="chart-price-monitoring__table-center">Макс.</b-th>
              <b-th colspan="1" class="chart-price-monitoring__table-center">% изм. Макс</b-th>
              <b-th colspan="1" class="chart-price-monitoring__table-center">Мин.</b-th>
              <b-th colspan="1" class="chart-price-monitoring__table-center">% изм. Мин.</b-th>
              <b-th colspan="1" class="chart-price-monitoring__table-center">Макс.</b-th>
              <b-th colspan="1" class="chart-price-monitoring__table-center">% изм. Макс</b-th>
            </b-tr>
          </template>
          <template v-slot:cell(netStoresMinPercent)="data">
            <div class="chart-price-monitoring__table-center">
              <b
                :class="{
                'text-danger': data.item.netStoresMinPercent < -20,
                'text-success': data.item.netStoresMinPercent > 0,
                'text-warning': data.item.netStoresMinPercent < 0 && data.item.netStoresMinPercent >= -20,
              }"
              >{{ isNaN(data.item.netStoresMinPercent) ? data.item.netStoresMinPercent : Number(data.item.netStoresMinPercent).toFixed(2) }}</b>
            </div>
          </template>
          <template v-slot:cell(netStoresMaxPercent)="data">
            <div class="chart-price-monitoring__table-center">
              <b
                :class="{
                  'text-danger': data.item.netStoresMaxPercent < -20,
                  'text-success': data.item.netStoresMaxPercent > 0,
                  'text-warning': data.item.netStoresMaxPercent < 0 && data.item.netStoresMaxPercent >= -20,
                }"
              >{{ isNaN(data.item.netStoresMaxPercent) ? data.item.netStoresMaxPercent : Number(data.item.netStoresMaxPercent).toFixed(2) }}</b>
            </div>
          </template>
          <template v-slot:cell(notNetStoresMinPercent)="data">
            <div class="chart-price-monitoring__table-center">
              <b
                :class="{
                  'text-danger': data.item.notNetStoresMinPercent < -20,
                  'text-success': data.item.notNetStoresMinPercent > 0,
                  'text-warning': data.item.notNetStoresMinPercent < 0 && data.item.notNetStoresMinPercent >= -20,
                }"
              >{{ isNaN(data.item.notNetStoresMinPercent) ? data.item.notNetStoresMinPercent : Number(data.item.notNetStoresMinPercent).toFixed(2) }}</b>
            </div>
          </template>
          <template v-slot:cell(notNetStoresMaxPercent)="data">
            <div class="chart-price-monitoring__table-center">
              <b
                :class="{
                  'text-danger': data.item.notNetStoresMaxPercent < -20,
                  'text-success': data.item.notNetStoresMaxPercent > 0,
                  'text-warning': data.item.notNetStoresMaxPercent < 0 && data.item.notNetStoresMaxPercent >= -20,
                }"
              >{{ isNaN(data.item.notNetStoresMaxPercent) ? data.item.notNetStoresMaxPercent : Number(data.item.notNetStoresMaxPercent).toFixed(2) }}</b>
            </div>
          </template>

          <template v-slot:cell(netStoresMin)="data">
            <div class="chart-price-monitoring__table-center">
              {{ isNaN(data.item.netStoresMin) ? data.item.netStoresMin : Number(data.item.netStoresMin).toFixed(2) }}
            </div>
          </template>
          <template v-slot:cell(netStoresMax)="data">
            <div class="chart-price-monitoring__table-center">
              {{ isNaN(data.item.netStoresMax) ? data.item.netStoresMax : Number(data.item.netStoresMax).toFixed(2) }}
            </div>
          </template>
          <template v-slot:cell(notNetStoresMin)="data">
            <div class="chart-price-monitoring__table-center">
              {{ isNaN(data.item.notNetStoresMin) ? data.item.notNetStoresMin : Number(data.item.notNetStoresMin).toFixed(2) }}
            </div>
          </template>
          <template v-slot:cell(notNetStoresMax)="data">
            <div class="chart-price-monitoring__table-center">
              {{ isNaN(data.item.notNetStoresMax) ? data.item.notNetStoresMax : Number(data.item.notNetStoresMax).toFixed(2) }}
            </div>
          </template>
        </b-table>
      </div>
      <div class="chart-price-monitoring__right">
        <BaseSidebarTable
          title="ТОП-5 ПОЗИЦИЙ ВЫМЫВАНИЯ ТОВАРОВ ДЕШЕВОЙ ЦЕНОВОЙ КАТЕГОРИИ ФЕДЕРАЛЬНЫХ СЕТЕЙ"
          color-scheme="red"
          :items="topRed.items"
        ></BaseSidebarTable>
        <BaseSidebarTable
          title="ТОП-5 ПОЗИЦИЙ РОСТА ТОВАРОВ ДЕШЕВОЙ ЦЕНОВОЙ КАТЕГОРИИ ФЕДЕРАЛЬНЫХ СЕТЕЙ"
          color-scheme="green"
          :items="topGreen.items"
        ></BaseSidebarTable>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSidebarTable from "@/components/BaseSidebarTable";
export default {
  name: 'ChartPriceMonitoring',
  components: {BaseSidebarTable},
  data() {
    return {
      topRed: this.$store.state.priceMonitoring.topRed,
      topGreen: this.$store.state.priceMonitoring.topGreen,
      table: this.$store.state.priceMonitoring.table,
    };
  },
};
</script>

<style lang="sass" scoped>
.chart-price-monitoring
  position: relative

  &__table
    max-height: 794px !important

  &__table-center
    text-align: center

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
