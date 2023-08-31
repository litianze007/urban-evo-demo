<template>
    <div class="questionnair">
        <el-form ref="form" :model="form" label-width="auto" label-position="top">
            <el-form-item label="Name">
                <el-input v-model="form.name" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="Age">
                <el-input-number v-model="form.age" :min="0"></el-input-number>
            </el-form-item>
            <el-form-item label="1. Do you live in an urban area?" >
                <el-radio-group v-model="form.liveInUrban">
                    <el-radio label="yes">Yes</el-radio>
                    <el-radio label="no">No</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="2. Rate the infrastructure of your city (1-5)" >
                <el-rate v-model="form.infrastructureRating" :max="5" show-score></el-rate>
            </el-form-item>
            <el-form-item label="3. What improvements do you want? (Multiple)">
                <el-checkbox-group v-model="form.improvements">
                    <el-checkbox label="Roads">Better Roads</el-checkbox>
                    <el-checkbox label="Parks">More Parks</el-checkbox>
                    <el-checkbox label="Public Transport">Improved Public Transport</el-checkbox>
                    <el-checkbox label="Waste Management">Better Waste Management</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item>
                <div class="center-button">
                    <el-button type="primary" @click="onSubmit">Submit</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Questionnair extends Vue {


    form = {
        name: '',
        age: null,
        liveInUrban: '',
        infrastructureRating: 0,
        improvements: []
    }

    onSubmit() {
        // Handle the form submission
        console.log('Form Data:', this.form);
        this.$message.success('Form submitted successfully!');
        this.$emit("closeDialog");
    }

}
</script>

<style lang="less" scoped>
.center-button{
    display: flex;
    justify-content: center;
}

</style>
