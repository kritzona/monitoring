<template>
  <div class="base-lines">
    <canvas
      :id="linesId"
      class="base-lines__chart"
      width="950"
    ></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'BaseLines',
  data() {
    return {
      chart: {},
    };
  },
  methods: {
    renderChart(inputData) {
      const options = {
        legend: {
          display: true,
          position: 'right',
          labels: {
            fontSize: 8,
          }
        },
      };

      const colors = [
        '#007bff',
        '#6610f2',
        '#6f42c1',
        '#e83e8c',
        '#dc3545',
        '#fd7e14',
        '#ffc107',
        '#28a745',
        '#20c997',
        '#17a2b8',
        '#6c757d',
        '#0056FF',
        '#2EBF7A',
        '#17a2b8',
        '#FFCA52',
        '#FF6464',
        '#0056ff',
        '#333333',
        '#0056ff',
        '#333333',
        '#0056ff',
        '#333333',
        '#0056ff',
        '#333333',
      ];

      const datasets = [];
      const labels = inputData.labels;

      inputData.items.forEach((currentValue, index) => {
        datasets.push({
          borderWidth: 2,
          borderColor: colors[index],
          backgroundColor: 'transparent',
          data: currentValue.data,
          type: 'line',
          label: currentValue.name,
        });
      });

      const data = {
        datasets,
        labels,
      };

      console.log(data);

      const canvas = document.getElementById(this.linesId);
      const ctx = canvas.getContext("2d");

      this.chart = new Chart(ctx, {
        type: 'line',
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
    'linesId',
  ],
};
</script>

<style lang="sass" scoped>
</style>
