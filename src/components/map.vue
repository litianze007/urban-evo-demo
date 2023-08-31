<template>
        <div id="map">
                <GmapMap :center="center" :zoom="zoom" :style="mapStyle" ref="mapRef" :options="mapOptions">
                        <div v-for="(m, index) in markers" :key="index">
                                <GmapMarker
                                        :position="m.position"
                                        :title="m.title"
                                        :label="m.label"
                                        @click="clickMarker(index)">
                                </GmapMarker>
                                <QuestionairDia
                                        :show-control="questionDialogShowControl"
                                        :show-index="index">
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
        components:{
                QuestionairDia
        }
})
export default class Map extends Vue {
        map? = null;

        center = {
                lat: -35.2813,
                lng: 149.1183,
        };

        zoom = 15.5;

        mapOptions: ReturnType<typeof getMapOptions> | null = null;

        markers: any[] = [];

        mapStyle = {
                width: '80%',
                height: '110vh',
        };

        questionDialogShowControl: boolean[] = [];


        clickMarker(index: number){
                console.log(111111);
                this.$set(this.questionDialogShowControl, index, true);
                console.log(this.questionDialogShowControl[index]);
        }

        mounted() {
                this.mapOptions = getMapOptions();
                this.markers = [
                        {
                                position: {
                                        lat: -35.2813,
                                        lng: 149.1183,
                                },
                                title:"planning building",
                        },
                        {
                                position: {
                                        lat: -35.2830,
                                        lng: 149.1183,
                                },
                                title:"planning building",
                        },
                        {
                                position: {
                                        lat: -35.2800,
                                        lng: 149.1186,
                                },
                                title:"planning building",
                        },
                ];
                this.questionDialogShowControl = Array(this.markers.length).fill(false);
        }
}
</script>

<style>
#map {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-bottom: 5vh;
}
</style>
