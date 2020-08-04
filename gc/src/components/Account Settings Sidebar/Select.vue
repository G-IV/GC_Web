<template>
    <div class="h-100">
        <h1>Player Settings</h1>
        <SelectAccount></SelectAccount>
        <SelectBag></SelectBag>
        <SelectBall></SelectBall>
    </div>
</template>

<script>

import SelectAccount from './Select Account'
import SelectBag from './Select Bag'
import SelectBall from './Select Ball'

export default {
    name: "Selections",
    components:{
        SelectAccount,
        SelectBag,
        SelectBall
    }
}
</script>