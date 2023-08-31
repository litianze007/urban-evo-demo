<template>
  <div class="questionair-dia">
    <el-dialog
      title="Tips"
      :visible.sync="showControl[showIndex]"
      append-to-body
      width="600px"
    >
      <Questionnair @closeDialog="closeDialog"/>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Questionnair from './questionnair.vue';


@Component({
  components:{
    Questionnair
  }
}
)
export default class QuestionairDia extends Vue {

    @Prop() showControl!:boolean[];
    @Prop() showIndex!: number;


    // close the dialog
    closeDialog(){
      console.log("close dialog");
      this.$set(this.showControl, this.showIndex, false);
      this.$emit("check-nair", this.showIndex);
    }
}
</script>

<style lang="less"></style>
