<template>
    <div>
        <b-form-select :value="selected" :options="options"></b-form-select>
    </div>
</template>

<script>

export default {
    name: 'SelectBall',
    data(){
        return {
            selected: "Basic",
            options:[
                {value: "Basic", text: 'Basic'},
                {value: "Marlin", text: 'Marlin'},
                {value: 'Navigator', text: 'Navigator'},
                {value: 'Quasar', text: 'Quasar'},
                {value: 'Titan', text: 'Titan'},
                {value: 'Katana', text: 'Katana'},
                {value: 'Kingmaker', text: 'Kingmaker'},
                {value: 'Berserker', text: 'Berserker'}
            ]
        }
    }
}
</script>