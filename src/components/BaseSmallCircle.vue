<template>
  <div class="base-small-circle">
    <div class="base-small-circle__info">
      <div class="base-small-circle__info-block">
        <div class="base-small-circle__info-value">{{ topValue }}</div>
        <div
          class="base-small-circle__info-desc"
          v-if="topDesc !== undefined"
        >{{ topDesc }}</div>
      </div>

      <div class="base-small-circle__info-delimiter"></div>

      <div class="base-small-circle__info-block">
        <div class="base-small-circle__info-value">{{ bottomValue }}</div>
        <div
          class="base-small-circle__info-desc"
          v-if="bottomDesc !== undefined"
        >{{ bottomDesc }}</div>
      </div>
    </div>
    <canvas
      :id="bigCircleId"
      class="base-small-circle__chart"
    ></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'BaseSmallCircle',
  data() {
    return {
      chart: {},
    };
  },
  methods: {
    renderChart(inputData) {
      const colors = [
        '#0056ff',
        '#FF6464',
      ];
      const options = {
        cutoutPercentage: 85,
        legend: {
          display: false,
          position: 'bottom',
          padding: 5,
          labels: {
            pointStyle: 'circle',
            usePointStyle: true,
          },
        },
      };

      const data = {
        datasets: [
          {
            borderWidth: 0,
            backgroundColor: colors.slice(0, 2),
            data: [
              inputData.data[1],
              inputData.data[0] - inputData.data[1],
            ],
          }
        ],
        labels: inputData.labels,
      };

      const canvas = document.getElementById(this.bigCircleId);
      const ctx = canvas.getContext("2d");

      this.chart = new Chart(ctx, {
        type: 'pie',
        data,
        options,
      });
    },
  },
  mounted() {
    this.renderChart(this.inputData);
  },
  props: [
    'inputData',
    'topValue',
    'topDesc',
    'bottomValue',
    'bottomDesc',
    'bigCircleId',
  ],
};
</script>

<style lang="sass" scoped>
.base-small-circle
  position: relative
  width: 512px
  height: 256px
  overflow: hidden

  &__chart
    width: 512px
    margin-left: -128px

  &__info
    width: 256px
    height: 256px
    background:
      color: #d3d2d2
    border-radius: 50%
    top: 0
    left: 0
    position: absolute
    z-index: -1
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    &-block
      width: 160px
    &-value
      font-family: PTSansBold
      font-weight: 500
      font-size: 52px
      text-align: center
      line-height: 1
      word-wrap: break-word
    &-desc
      font-family: PTSansRegular
      font-size: 14px
      text-align: center
      text-transform: uppercase
      word-wrap: break-word
    &-delimiter
      margin:
        top: 5px
        bottom: 5px
      height: 2px
      background-color: #333333
      width: 100px
</style>
