<template>
    <div>
        <mine-top />
        <mine-middle />
    </div>
</template>

<script setup>
import MineMiddle from '/src/components/mine/MineMiddle.vue'
import MineTop from '/src/components/mine/MineTop.vue'

</script>

<style scoped>
:deep(.card) {
    padding: 10px;
    box-shadow: 0 0 20px 1px #dddddd;
    border-radius: 15px !important;
    margin: 20px;
}

html, body {
    background-color: #ccc;
}
</style>