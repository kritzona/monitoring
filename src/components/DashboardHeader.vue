<template>
  <div class="dashboard-header">
    <div class="dashboard-header__line">
      <div class="dashboard-header__page-title">{{ page.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader',
  data() {
    return {
      page: {
        title: 'Мониторинг',
      },
    };
  },
  mounted() {
    const nowDate = new Date();

    let nowDateDay = nowDate.getDate();
    let nowDateMonth = nowDate.getMonth();
    const nowDateYear = nowDate.getFullYear();

    nowDateDay = nowDateDay < 10 ? String(`0${nowDateDay}`) : String(nowDateDay);
    nowDateMonth = nowDateMonth < 10 ? String(`0${nowDateMonth}`) : String(nowDateMonth);

    this.page.title = `Оперативные данные на ${nowDateDay}.${nowDateMonth}.${nowDateYear}`;
  },
};
</script>

<style lang="sass" scoped>
.dashboard-header
  padding-left: 64px
  background-color: #ffffff
  position: fixed
  top: 0
  left: 0
  width: 100%
  z-index: 99

  &__line
    display: flex
    align-items: center
    height: 64px
    padding: 0 24px
    box-shadow: 0 8px 24px 0 rgba(39, 44, 58, .05)
  &__page-title
    font-family: PTSansBold
    font-size: 16px
    font-weight: 700
    color: #333333
    letter-spacing: 0.5px
</style>
