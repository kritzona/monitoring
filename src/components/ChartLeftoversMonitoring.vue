<template>
  <div class="chart-leftovers-monitoring">
    <h1 class="chart-leftovers-monitoring__main-title">Мониторинг остатков в сетевых магазинах</h1>
    <div class="chart-leftovers-monitoring__body">
      <div class="chart-leftovers-monitoring__left">
        <b-table sticky-header hover striped="striped" :items="table.items" :fields="table.fields" class="chart-leftovers-monitoring__table">
          <template v-slot:thead-top>
            <b-tr>
              <b-th colspan="1">№</b-th>
              <b-th colspan="1">Товары</b-th>
              <b-th colspan="1" class="chart-leftovers-monitoring__table-center">Товарные запасы в торговле</b-th>
              <b-th colspan="1" class="chart-leftovers-monitoring__table-center">% роста / снижения от предыдущего значения</b-th>
            </b-tr>
          </template>

          <template v-slot:cell(count)="data">
            <div class="chart-leftovers-monitoring__table-center">
              {{ isNaN(data.item.count) ? data.item.count : Number(data.item.count).toLocaleString() }}
            </div>
          </template>
          <template v-slot:cell(percent)="data">
            <div class="chart-leftovers-monitoring__table-center">
              <b
                :class="{
                'text-danger': data.item.percent < -20,
                'text-success': data.item.percent > 0,
                'text-warning': data.item.percent < 0 && data.item.percent >= -20,
              }"
              >{{ isNaN(data.item.percent) ? data.item.percent : Number(data.item.percent).toLocaleString() }}</b>
            </div>
          </template>
        </b-table>
      </div>
      <div class="chart-leftovers-monitoring__right">
        <BaseSidebarTable
          title="ТОП-5 ПОЗИЦИЙ ВЫМЫВАНИЯ ТОВАРОВ ДЕШЕВОЙ ЦЕНОВОЙ КАТЕГОРИИ ФЕДЕРАЛЬНЫХ СЕТЕЙ"
          color-scheme="red"
          :items="topRed.items"
        ></BaseSidebarTable>
        <BaseSidebarTable
          title="ТОП-5 ПОЗИЦИЙ РОСТА ТОВАРОВ ДЕШЕВОЙ ЦЕНОВОЙ КАТЕГОРИИ ФЕДЕРАЛЬНЫХ СЕТЕЙ"
          color-scheme="green"
          :items="topRed.items"
        ></BaseSidebarTable>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSidebarTable from "@/components/BaseSidebarTable";
export default {
  name: 'ChartLeftoversMonitoring',
  components: {BaseSidebarTable},
  data() {
    return {
      topRed: this.$store.state.leftoversMonitoring.topRed,
      topGreen: this.$store.state.leftoversMonitoring.topGreen,
      table: this.$store.state.leftoversMonitoring.table,
    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>

<style lang="sass" scoped>
.chart-leftovers-monitoring
  position: relative

  &__table
    max-height: 826px !important

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
