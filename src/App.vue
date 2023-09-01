<template>
  <div class="block">
    <router-view />
  </div>
</template>



<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue{

}

</script>


<style scoped>
.block{
  height:100%;
}
</style>
