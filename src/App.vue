<template>
  <div id="app">
    <Dashboard></Dashboard>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard";

export default {
  name: 'App',
  components: {Dashboard}
}
</script>

<style lang="sass">
@import "./assets/fonts/PTSans/PTSans.css"
@import "./assets/libs/animate/animate.css"

*
  -webkit-font-smoothing: subpixel-antialiased
  -moz-osx-font-smoothing: grayscale
  box-sizing: border-box

body
  background: #eef2f6
  margin: 0
  overflow-x: hidden

h1
  font-family: PTSansBold
  font-size: 24px
  font-weight: 500
  font-style: normal
  line-height: 1
  text-transform: uppercase
  color: #333333
  text-align: center
  margin:
    top: 20px
    bottom: 40px
h2
  font-family: PTSansBold
  font-size: 18px
  font-weight: 500
  font-style: normal
  line-height: 1
  color: #333333
  margin:
    top: 25px
    bottom: 25px

.table td,
.table th
  border: 1px solid #dee2e6 !important

th[scope="col"]
  display: none
</style>
