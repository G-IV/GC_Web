<template>
    <div>
        <b-form-select :value="selected" :options="options"></b-form-select>
    </div>
</template>

<script>

export default {
    name: 'SelectBag',
    data(){
        return {
            selected: "1",
            options:[
                {value: "1", text: '1'},
                {value: "2", text: '2'},
                {value: '3', text: '3'},
                {value: '4', text: '4'},
                {value: '5', text: '5'}
            ]
        }
    }
}
</script>