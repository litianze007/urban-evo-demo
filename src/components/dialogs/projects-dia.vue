<template>
    <div class="projects-dia">
        <el-dialog title="Projects" :visible.sync="showControl" append-to-body width="520px"
            @close="$emit('update:show-control', false)">
            <Projects></Projects>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Projects from './projects.vue';

@Component({
    components: {
        Projects
    }
})
export default class ProjectsDia extends Vue {
    @Prop() showControl!: boolean;
}
</script>

<style lang="less">
</style>
