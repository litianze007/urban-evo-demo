<template>
    <div class="projects">
        <el-card v-for='(project, index) in projects' :key="index" class="box-card">
            <div slot="header" class="clearfix">
                <span style="font-weight: 600;">{{ project.name }}</span>

                <el-tag v-if='project.status === "discussing"' type='success' effect="dark" size="mini"
                    style="margin-left:0.3vw;">
                    {{ project.status }}
                </el-tag>
                <el-tag v-else type='danger' effect="dark" size="mini" style="margin-left:0.3vw;">
                    {{ project.status }}
                </el-tag>

                <el-button v-if='!haveDone[index]' style="float: right; padding: 3px 0" type="text"
                    :disabled="project.status !== 'discussing'" @click="doQuestionnaire(index)">Do
                    It</el-button>
                <el-button v-else style="float: right; padding: 3px 0" type="text"
                    :disabled="project.status !== 'discussing'" @click="$router.push('/layout/forum')">Go To
                    Forum</el-button>


                <QuestionairDia :show-control.sync="showControl" @check-nair="checkNair">
                </QuestionairDia>
            </div>
            <div class="text item">
                {{ project.description }}
            </div>
            <div class="text item">
                <a :href="documentLink" target="_blank">Go to more detail</a>
            </div>
            <div class="text item" style="color:rgb(248, 116, 116);text-align: right;">
                {{ project.due }}
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import QuestionairDia from './questionair-dia.vue';



@Component({
    components: {
        QuestionairDia
    }
})
export default class Projects extends Vue {

    projects = [
        {
            "name": "increase the printer in the library",
            "description": "Improving infrastructure for better user experience.",
            "status": "discussing",
            "due": "2023/9/10-2023/9/24",
            "image": "Project Image"
        },
        {
            "name": "increase the quality of road",
            "description": "Focus on safety and quality of transport routes.",
            "status": "discussing",
            "due": "2023/9/5-2023/9/19",
            "image": "Project Image"
        },
        {
            "name": "increase the quality in the gym",
            "description": "Enhancement of fitness facilities for the community.",
            "status": "closed",
            "due": "2023/9/6-2023/9/20",
            "image": "Project Image"
        },
        {
            "name": "increase the toilet in the library",
            "description": "Ensuring sanitary and hygienic conditions for students.",
            "status": "discussing",
            "due": "2023/9/11-2023/9/25",
            "image": "Project Image"
        },
        {
            "name": "forbid the bicycles riding in the ...",
            "description": "Regulating traffic to ensure pedestrian safety.",
            "status": "discussing",
            "due": "2023/9/16-2023/9/30",
            "image": "Project Image"
        }
    ];

    documentLink = "https://www.planning.act.gov.au/development-applications-assessments/development-applications/da-details?da-number=202138926&amendment-version=";


    showControl = false;

    haveDone: boolean[] = [false, false, false, false, false];

    showIndex = 0;

    doQuestionnaire(index: number) {
        this.showControl = true;
        this.showIndex = index;
    }

    /**
         *
         * @param index the index of the marker
         * @description check the nair has done or not
         * @returns void
         */
    checkNair() {
        this.$set(this.haveDone, this.showIndex, true);
        localStorage.setItem('nairDone', JSON.stringify(this.haveDone));
        this.$message({
            showClose: true,
            message: 'Submitted successfully, forwarding to discussion ...',
            type: 'success',
            duration: 2500,
        });

        setTimeout(() => {
            this.$router.push({
                path: '/layout/forum'
            });
        }, 2000)
    }



    mounted() {
        const nairDone = localStorage.getItem('nairDone');
        if (nairDone) {
            this.haveDone = JSON.parse(nairDone);
        }
    }




}
</script>

<style lang="less" scoped>
.text {
    font-size: 14px;

    /* Border Bottom Animation */
    a {
        text-decoration: none;
        color: #007BFF;
        border-bottom: 2px solid transparent;
        transition: border-bottom 0.3s;
    }

    /* Link Hover Effect */
    a:hover {
        border-bottom: 2px solid #007BFF;
    }


}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 480px;
    margin: 20px auto;
}
</style>
