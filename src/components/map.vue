<template>
        <div id="map">
                <GmapMap :center="center" :zoom="zoom" :style="mapStyle" ref="mapRef" :options="mapOptions">
                        <div v-for="(m, index) in markers" :key="index">
                                <GmapMarker :position="m.position" :title="m.title" :label="m.label"
                                        @click="clickMarker(index)">
                                </GmapMarker>
                                <QuestionairDia :show-control="questionDialogShowControl" :show-index="index"
                                        @check-nair="checkNair">
                                </QuestionairDia>
                        </div>
                </GmapMap>
        </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getMapOptions } from '../jsons/mapOptions';

import QuestionairDia from './dialogs/questionair-dia.vue';

@Component({
        components: {
                QuestionairDia
        }
})
export default class Map extends Vue {
        map?= null;


        // map basic options
        center = {
                lat: -35.2813,
                lng: 149.1183,
        };

        zoom = 15.5;

        mapOptions: ReturnType<typeof getMapOptions> | null = null;

        markers: any[] = [];

        mapStyle = {
                width: '80%',
                height: '77vh',
        };

        questionDialogShowControl: boolean[] = [];

        // the nair has done
        nairDone: boolean[] = []





        clickMarker(index: number) {
                if (this.nairDone[index]) {
                        this.$router.push({
                                path: '/layout/forum'
                        });
                        return;
                }
                this.$set(this.questionDialogShowControl, index, true);
                console.log(this.questionDialogShowControl[index]);
        }



        checkNair(index: number) {
                this.$set(this.nairDone, index, true);
                localStorage.setItem('nairDone', JSON.stringify(this.nairDone))
                this.$message({
                        showClose: true,
                        message: 'Submitted successfully, forwarding to discussion ...',
                        type: 'success',
                        duration: 2500,
                });

                setTimeout(()=>{
                        this.$router.push({
                                path: '/layout/forum'
                        });
                }, 2000)
        }

        mounted() {
                this.mapOptions = getMapOptions();
                this.markers = [
                        {
                                position: {
                                        lat: -35.2813,
                                        lng: 149.1183,
                                },
                                title: "planning building",
                        },
                        {
                                position: {
                                        lat: -35.2830,
                                        lng: 149.1183,
                                },
                                title: "planning building",
                        },
                        {
                                position: {
                                        lat: -35.2800,
                                        lng: 149.1186,
                                },
                                title: "planning building",
                        },
                ];
                this.questionDialogShowControl = Array(this.markers.length).fill(false);

                if(!localStorage.getItem('nairDone')){
                        this.nairDone = Array(this.markers.length).fill(false);
                }
                else{
                        this.nairDone = JSON.parse(localStorage.getItem('nairDone') as string);
                }
        }
}
</script>

<style>
#map {
        display: flex;
        width: 100%;
        z-index: 1;
        justify-content: center;
        margin-bottom: 5vh;
}
</style>
