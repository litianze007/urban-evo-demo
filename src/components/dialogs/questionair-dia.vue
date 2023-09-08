<template>
  <div class="questionair-dia">
    <el-dialog title="Questionnaire" :visible.sync="showControl" append-to-body width="600px"
      @close="$emit('update:showControl', false)">
      <Questionnair @closeDialog="closeDialog" />
    </el-dialog>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Questionnair from './questionnair.vue';


@Component({
  components: {
    Questionnair
  }
}
)
export default class QuestionairDia extends Vue {

  @Prop() showControl!: boolean;


  // close the dialog
  closeDialog() {
    this.$emit('update:showControl', false);
    this.$emit("check-nair");
  }
}
</script>

<style lang="less">
</style>
