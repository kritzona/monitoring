<template>
  <div class="chart-operational-data-map">
    <div class="chart-operational-data-map__image"></div>
    <BaseBigCircle
      :input-data="circles.total"
      :top-value="circles.total.topValue"
      top-desc="Магазинов проверено"
      :bottom-value="circles.total.bottomValue"
      bottom-desc="С повышенным спросом"
      big-circle-id="chart-operation-data-map-circle-total"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--total"
    ></BaseBigCircle>


    <BaseSmallCircle
      :input-data="circles.tinao"
      :top-value="circles.tinao.topValue"
      :bottom-value="circles.tinao.bottomValue"
      big-circle-id="chart-operation-data-map-circle-tinao"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--tinao"
    ></BaseSmallCircle>
    <BaseSmallCircle
      :input-data="circles.zao"
      :top-value="circles.zao.topValue"
      :bottom-value="circles.zao.bottomValue"
      big-circle-id="chart-operation-data-map-circle-zao"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--zao"
    ></BaseSmallCircle>
    <BaseSmallCircle
      :input-data="circles.uzao"
      :top-value="circles.uzao.topValue"
      :bottom-value="circles.uzao.bottomValue"
      big-circle-id="chart-operation-data-map-circle-uzao"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--uzao"
    ></BaseSmallCircle>
    <BaseSmallCircle
      :input-data="circles.uao"
      :top-value="circles.uao.topValue"
      :bottom-value="circles.uao.bottomValue"
      big-circle-id="chart-operation-data-map-circle-uao"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--uao"
    ></BaseSmallCircle>
    <BaseSmallCircle
      :input-data="circles.uvao"
      :top-value="circles.uvao.topValue"
      :bottom-value="circles.uvao.bottomValue"
      big-circle-id="chart-operation-data-map-circle-uvao"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--uvao"
    ></BaseSmallCircle>
    <BaseSmallCircle
      :input-data="circles.vao"
      :top-value="circles.vao.topValue"
      :bottom-value="circles.vao.bottomValue"
      big-circle-id="chart-operation-data-map-circle-vao"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--vao"
    ></BaseSmallCircle>
    <BaseSmallCircle
      :input-data="circles.svao"
      :top-value="circles.svao.topValue"
      :bottom-value="circles.svao.bottomValue"
      big-circle-id="chart-operation-data-map-circle-svao"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--svao"
    ></BaseSmallCircle>
    <BaseSmallCircle
      :input-data="circles.sao"
      :top-value="circles.sao.topValue"
      :bottom-value="circles.sao.bottomValue"
      big-circle-id="chart-operation-data-map-circle-sao"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--sao"
    ></BaseSmallCircle>
    <BaseSmallCircle
      :input-data="circles.szao"
      :top-value="circles.szao.topValue"
      :bottom-value="circles.szao.bottomValue"
      big-circle-id="chart-operation-data-map-circle-szao"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--szao"
    ></BaseSmallCircle>
    <BaseSmallCircle
      :input-data="circles.cao"
      :top-value="circles.cao.topValue"
      :bottom-value="circles.cao.bottomValue"
      big-circle-id="chart-operation-data-map-circle-cao"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--cao"
    ></BaseSmallCircle>
    <BaseSmallCircle
      :input-data="circles.zelao"
      :top-value="circles.zelao.topValue"
      :bottom-value="circles.zelao.bottomValue"
      big-circle-id="chart-operation-data-map-circle-zelao"
      class="chart-operational-data-map__circle chart-operational-data-map__circle--zelao"
    ></BaseSmallCircle>


    <ChartOperationalDataResult
      class="chart-operational-data-map__result"
      :total-stores="result.totalStores"
      :net-stores="result.netStores"
      :not-net-stores="result.notNetStores"
    ></ChartOperationalDataResult>
  </div>
</template>

<script>
import BaseBigCircle from "@/components/BaseBigCircle";
import BaseSmallCircle from "@/components/BaseSmallCircle";
import ChartOperationalDataResult from "@/components/ChartOperationalDataResult";
export default {
  name: 'ChartOperationalDataMap',
  data() {
    return {
      circles: this.$store.state.operationalData.circles,
      result: this.$store.state.operationalData.result,
    };
  },
  components: {ChartOperationalDataResult, BaseSmallCircle, BaseBigCircle},
};
</script>

<style lang="sass" scoped>
.chart-operational-data-map
  position: relative

  &__result
    position: absolute
    top: 0
    right: 20px
    pointer-events: none

  &__image
    width: 450px
    height: 401px
    background:
      image: url(../assets/moscow-map.png)
      repeat: no-repeat
      position: left top
      size: contain

  &__circle
    position: absolute !important
    z-index: 2

    &--total
      top: 158px
      left: 342px
      transform: scale(0.7)

    &--tinao
      top: 181px
      left: 3px
      transform: scale(0.2)
    &--zao
      top: 93px
      left: 16px
      transform: scale(0.2)
    &--uzao
      top: 139px
      left: 48px
      transform: scale(0.2)
    &--uao
      top: 151px
      left: 102px
      transform: scale(0.2)
    &--uvao
      top: 103px
      left: 141px
      transform: scale(0.2)
    &--vao
      top: 25px
      left: 147px
      transform: scale(0.2)
    &--svao
      top: -19px
      left: 90px
      transform: scale(0.2)
    &--sao
      top: -27px
      left: 38px
      transform: scale(0.2)
    &--szao
      top: 14px
      left: -3px
      transform: scale(0.2)
    &--zelao
      top: -88px
      left: -91px
      transform: scale(0.2)
    &--cao
      top: 58px
      left: 85px
      transform: scale(0.2)

</style>
