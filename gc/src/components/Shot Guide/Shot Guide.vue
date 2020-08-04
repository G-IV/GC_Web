<template>
    <div class="h-100">
        <h1>Shot Guide</h1>
        <b-row class="h-50">
            <b-col cols=6 class="h-100">
                <b-img :src="require('../../assets/Courses/Meadow Castle/Hole_1_-_Par_3.svg')" contain class="h-100"></b-img>
            </b-col>
            <b-col cols=6>
                <shot></shot>
            </b-col>
        </b-row>
        <b-row class="h-50">
            <b-col cols=12>
                Notes on the hole
            </b-col>
        </b-row>
    </div>
</template>

<script>
import shot from './Shot'
export default {
    name: "HoleGuide",
    components:{
        shot
    }
}
</script>