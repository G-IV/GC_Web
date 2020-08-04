<template>
    <div>
        <h1>Tours</h1>
        <Courses></Courses>
        <Holes></Holes>
        <Shootouts></Shootouts>
    </div>
</template>

<script>
import Courses from './Courses'
import Holes from './Holes'
import Shootouts from './Shootouts'
export default {
    name: 'Tours',
    components:{
        Courses,
        Holes,
        Shootouts
    }
}
</script>