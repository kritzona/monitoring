<template>
  <div class="dashboard">
    <DashboardHeader></DashboardHeader>
    <DashboardMenu></DashboardMenu>
    <DashboardContent></DashboardContent>
  </div>
</template>

<script>
import DashboardHeader from "@/components/DashboardHeader";
import DashboardContent from "@/components/DashboardContent";
import DashboardMenu from "@/components/DashboardMenu";

export default {
  name: 'Dashboard',
  components: {DashboardMenu, DashboardContent, DashboardHeader},
};
</script>

<style lang="sass" scoped>

</style>
