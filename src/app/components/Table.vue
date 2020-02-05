<template>
    <div class="table">
        <div class="table-header">
            <span class="table-header-text">Rates for {{ date }}, base is {{ base }}</span>
        </div>
        <div v-for="rate in rates" class="table-row">
            <div class="table-column">{{ rate.name }}</div>
            <div class="table-column">{{ rate.value }}</div>
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
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
        border-radius: 3px;
    }
    .table-header {
        background-color: #2196f3;
        color: white;
        font-size: 0.9375rem;
        font-weight: 600;
        height: 3rem;
        text-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .table-header-text {
        margin: auto;
        display: block;
    }
    .table-row {
        display: flex;
        justify-content: inherit;
        min-width: 6rem;
        border-bottom: 1px solid lightgrey;
    }
    .table-column {
        display: inline-block;
        padding: 1rem;
        min-width: 3rem;
        text-align: left;
    }
</style>
