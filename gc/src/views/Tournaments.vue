<template>
    <b-row class="routerHeight">
        <b-col cols=2><CourseSelect></CourseSelect></b-col>
        <b-col cols=8><ShotGuide></ShotGuide></b-col>
        <b-col cols=2><Selections></Selections></b-col>
    </b-row>
</template>

<script>

import Selections from '../components/Account Settings Sidebar/Select'
import ShotGuide from '../components/Shot Guide/Shot Guide'
import CourseSelect from '../components/Courses/Tournaments'

export default {
    name:'Tournaments',
    components:{
        Selections,
        ShotGuide,
        CourseSelect
    }
}
</script>