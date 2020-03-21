<template>
  <div class="price-monitoring">
    <ChartPriceMonitoring></ChartPriceMonitoring>
  </div>
</template>

<script>
import ChartPriceMonitoring from "@/components/ChartPriceMonitoring";

export default {
  name: 'PriceMonitoring',
  components: {ChartPriceMonitoring},
};
</script>
