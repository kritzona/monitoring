<template>
  <div class="chart-operational-data">
    <h1 class="chart-operational-data__main-title">Текущая статистика мониторинга магазинов по округам</h1>
    <div class="chart-operational-data__body">
      <div class="chart-operational-data__left">
        <ChartOperationalDataMap></ChartOperationalDataMap>

        <h2 class="chart-operational-data__sub-title"></h2>

      </div>
      <div class="chart-operational-data__right">
        <h2 class="chart-operational-data__sub-title">Количество магазинов с повышенным спросом</h2>
        <ChartOperationalDataStores></ChartOperationalDataStores>
      </div>
    </div>
  </div>
</template>

<script>
import ChartOperationalDataMap from "@/components/ChartOperationalDataMap";
import ChartOperationalDataStores from "@/components/ChartOperationalDataStores";

export default {
  name: 'ChartOperationalData',
  components: {ChartOperationalDataStores, ChartOperationalDataMap},
  data() {
    return {
      date: {
        day: '',
        month: '',
        year: '',
      },
    };
  },
  methods: {

  },
  computed: {
    dateFormatted() {
      return `${this.date.day}.${this.date.month}.${this.date.year}`;
    },
  },
};
</script>

<style lang="sass" scoped>
.chart-operational-data
  position: relative

  &__sub-title
    text-align: center

  &__result
    position: absolute
    top: 0
    right: 20px
    pointer-events: none

  &__body
    display: flex
    flex-direction: row
    justify-content: space-between

  &__left,
  &__right
    width: 50%

  &__right
    padding-left: 40px

  &__list
    font-family: PTSansRegular
    font-style: normal
    font-size: 14px
    line-height: 1.5

    & > li
      margin-bottom: 10px

      &:last-child
        margin-bottom: 0

</style>
