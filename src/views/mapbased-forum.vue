<template>
    <div class="mapbased-forum">
        <Map></Map>
    </div>
</template>






<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

import Map from '@/components/map.vue';

@Component({
    components:{
        Map
    }
})
export default class MapbasedForum extends Vue {

}
</script>
