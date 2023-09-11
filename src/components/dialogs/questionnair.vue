<template>
    <div class="questionnair">
        <el-form ref="form" :model="form" label-width="auto" label-position="top">
            <el-form-item label="Name">
                <el-input v-model="form.name" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="Age">
                <el-input-number v-model="form.age" :min="0"></el-input-number>
            </el-form-item>
            <el-form-item label="1. Do you live in an urban area?">
                <el-radio-group v-model="form.liveInUrban">
                    <el-radio label="yes">Yes</el-radio>
                    <el-radio label="no">No</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="2. Rate the infrastructure of your city (1-5)">
                <el-slider v-model="form.infrastructureRating" :max="5" :min='1' style="width:300px;margin-left:.5vw;"
                    show-stops show-tooltip :format-tooltip="formatTooltip"></el-slider>
            </el-form-item>
            <el-form-item label="3. What improvements do you want? (Multiple)">
                <el-checkbox-group v-model="form.improvements">
                    <el-checkbox label="Roads">Better Roads</el-checkbox>
                    <el-checkbox label="Parks">More Parks</el-checkbox>
                    <el-checkbox label="Public Transport">Improved Public Transport</el-checkbox>
                    <el-checkbox label="Waste Management">Better Waste Management</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="4. Do you have other advice? ">
                <el-input type="textarea" v-model="form.feedback"></el-input>
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
        improvements: [],
        feedback: ''
    }

    marks = {
        1: {
            style: { color: '#F56C6C', textAlign: 'center' },
            label: 'Unsatisfied'
        },
        4.7: {
            style: { color: '#67C23A', textAlign: 'center' },
            label: this.$createElement('strong', '50%')
        },
    }



    onSubmit() {
        // Handle the form submission
        this.$emit("closeDialog");
    }

    formatTooltip(val: number) {
        switch (val) {
            case 1:
                return 'very Unsatisfied';
            case 2:
                return 'Unsatisfied';
            case 3:
                return 'Normal';
            case 4:
                return 'Satisfied';
            case 5:
                return 'very Satisfied';
            default:
                return '';
        }
    }

}
</script>

<style lang="less" scoped>
.center-button {
    display: flex;
    justify-content: center;
}

.slider-labels {
    display: flex;
    align-items: center;

    >span {
        margin: 0 10px;
    }
}
</style>
