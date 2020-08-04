<template>
    <div>
        <b-form
            @submit="onSubmit"
        >
            Direction <br>
            <b-form-group
                id="windForm"
                label="Wind"
                label-for="shotWind"
                label-align="right"
                label-cols="4"
            >
                <b-form-input id="shotWind" v-model="shot.wind" type="number"></b-form-input>
            </b-form-group>
            <b-form-group
                id="distanceForm"
                label="Distance (%)"
                label-for="shotDistance"
                label-align="right"
                label-cols="4"
            >
                <b-form-input id="shotDistance" v-model="shot.distance" type="number"></b-form-input>
            </b-form-group>
            <b-form-group
                id="elevationForm"
                label="Elevation (%)"
                label-for="shotElevation"
                label-align="right"
                label-cols="4"
            >
                <b-form-input id="shotElevation" v-model="shot.elevation" type="number"></b-form-input>
            </b-form-group>
        </b-form>
        Driver Adjumstent <br>
        Wood Adjumstent <br>
        Long Iron Adjumstent <br>
        Short Iron Adjumstent <br>
        Wedge Iron Adjumstent <br>
        Rough Iron Adjumstent <br>
        Sand Iron Adjumstent <br>
        Spin Adjustment
    </div>
</template>

<script>
export default {
    name: 'Shot',
    data(){
        return{
            shot:{
                direction: 0.0,
                wind: 0.0,
                distance: 100,
                elevation: 0.0
            }
        }
    },
    methods:{
        onSubmit(evt){
            evt.preventDefault();
            console.log("Submit form")
        }
    }
}
</script>