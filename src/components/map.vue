<template>
        <div id="map">
                <div class="filter">
                        <div class="logo">
                                <img src="../assets/logo.png" alt="logo">
                        </div>
                        <el-cascader v-model="value" :options="filterOptions" :style="{ width: '420px' }"
                                :props="{ expandTrigger: 'hover' }" clearable @change="searchPlace"
                                placeholder="Select A Project Here !"></el-cascader>
                </div>
                <GmapMap :center="center" :zoom="zoom" :style="mapStyle" ref="mapRef" :options="mapOptions">
                        <div v-for="(m, index) in markers" :key="index">
                                <GmapMarker :position="m.position" :title="m.title" :clickable="true"
                                        @click="clickMarker(index)">
                                </GmapMarker>
                                <ProjectsDia :show-control.sync="showControl">
                                </ProjectsDia>
                        </div>
                </GmapMap>
        </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getMapOptions, filterOptions, regionData } from '../jsons/mapOptions';
import { gmapApi } from 'vue2-google-maps';
import { RegionData, Project } from '@/types/map-type';


import ProjectsDia from './dialogs/projects-dia.vue';

@Component({
        components: {
                ProjectsDia
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

        mapStyle = {
                width: '100%',
                height: '77vh',
        };


        showControl = false;

        // filter value
        value: any[] = [];

        // filter options
        filterOptions: ReturnType<typeof filterOptions> | null = null;

        regionData: RegionData | null = null;


        // google api
        get google() {
                return gmapApi()
        }

        get markers() {
                if (this.value.length === 0) {
                        return [];
                }
                return this.regionData![this.value[0]][this.value[1]]?.map((item: Project) => {

                        return {
                                position: {
                                        lat: item.position.lat,
                                        lng: item.position.lng,
                                },
                                title: item.projectName,
                        }
                });

        }


        /**
         * @description search the place and set the center of the map to the place
         * @returns void
         */
        searchPlace() {

                const geocoder = new this.google.maps.Geocoder();
                geocoder.geocode({ address: this.value[0] }, (results: any, status: any) => {
                        if (status === 'OK') {
                                this.center = {
                                        lat: results[0].geometry.location.lat(),
                                        lng: results[0].geometry.location.lng(),
                                };
                                this.zoom = 15.2;
                        } else {
                                alert('Geocode was not successful for the following reason: ' + status);
                        }
                });
        }



        /**
         * @param index the index of the marker
         * @description handle the click event of the marker
         */
        clickMarker(index: number) {
                this.showControl = true;
        }





        mounted() {
                this.mapOptions = getMapOptions();
                this.filterOptions = filterOptions();
                this.regionData = regionData();
        }
}
</script>

<style scoped lang="less">
#map {
        position: relative;
        display: flex;
        width: 80%;
        height: 77vh;
        z-index: 1;
        justify-content: center;
        margin-bottom: 5vh;

        .filter {
                position: absolute;
                display: flex;
                align-items: center;
                top: 2vh;
                left: 2vw;
                border-radius: 5px;
                z-index: 100;

                .logo {
                        display: inline-block;
                        height: 4vh;
                        width: 4vh;
                        margin-right: 10px;
                        border-radius: 50%;
                        overflow: hidden;

                        img {
                                height: 100%;

                        }
                }

        }
}
</style>
