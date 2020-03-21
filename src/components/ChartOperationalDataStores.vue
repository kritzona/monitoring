<template>
  <div class="chart-operational-data-stores">
    <BaseMixChart
      mix-chart-id="chart-operational-data-stores"
      :input-data="stores"
    ></BaseMixChart>
  </div>
</template>

<script>
import BaseMixChart from "@/components/BaseMixChart";

export default {
  name: 'ChartOperationalDataStores',
  data() {
    return {
      stores: this.$store.state.operationalData.stores,
    };
  },
  components: {BaseMixChart},
};
</script>

<style lang="sass" scoped>
</style>
