<template>
  <div>
    <nav-bar></nav-bar>
    <div class="block">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import NavBar from "@/components/nav-bar.vue";

@Component({
  components:{
    NavBar,
  }
})
export default class PageLayout extends Vue {}
</script>

<style lang="less" scoped>
.block {
  z-index: -999;
}
</style>
