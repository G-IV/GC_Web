<template>
    <div>
        <b-form-select :value="selected" :options="options"></b-form-select>
    </div>
</template>

<script>

export default {
    name: 'SelectAccount',
    data(){
        return {
            selected: "1",
            options:[
                {value: "1", text: 'Main'},
                {value: "2", text: 'Alt 1'},
                {value: '3', text: 'Alt 2'}
            ]
        }
    }
}
</script>