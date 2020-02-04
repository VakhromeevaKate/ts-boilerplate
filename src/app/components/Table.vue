<template>
    <div class="table">
        <h3>Rates for {{ date }}, base is {{ base }}</h3>
        <div v-for="rate in rates">
            <div>{{ rate.name }}</div>
            <div>{{ rate.value }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["date", "rates", "base"],
    }
</script>

<style lang="scss" scoped>
    .table {

    }
</style>
