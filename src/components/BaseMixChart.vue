<template>
  <div class="base-mix-chart">
    <canvas
      :id="mixChartId"
      class="base-mix-chart__chart"
    ></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'BaseMixChart',
  data() {
    return {
      chart: {},
    };
  },
  methods: {
    renderChart(inputData) {
      const options = {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              id: 'mixChartLine',
            },
          ],
        },
      };

      const dataForLine = [];

      inputData.data.forEach((currentValue) => {
        dataForLine.push(currentValue);
      });

      const data = {
        datasets: [
          {
            borderWidth: 2,
            borderColor: '#333333',
            backgroundColor: 'transparent',
            data: dataForLine,
            type: 'line',
            yAxesID: 'mixChartLine',
          },
          {
            borderWidth: 0,
            backgroundColor: '#0056ff',
            data: inputData.data,
            yAxesID: 'mixChartBar',
          },
        ],
        labels: inputData.labels,
      };

      const canvas = document.getElementById(this.mixChartId);
      const ctx = canvas.getContext("2d");

      this.chart = new Chart(ctx, {
        type: 'bar',
        data,
        options,
      });

      return inputData;
    },
  },
  mounted() {
    this.renderChart(this.inputData);
  },
  props: [
    'inputData',
    'mixChartId',
  ],
};
</script>

<style lang="sass" scoped>
.base-mix-chart
  width: 512px

  &__chart
    width: 512px
</style>
