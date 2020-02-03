<template>
    <div>
        <NavBar title="Exchange rate"></NavBar>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import store from "../store/store"

export default {
    store,
    el: '#app',
    components: {
        NavBar
    },
    mounted: function() {
        this.$store.dispatch("rates/fetchData");
        console.log(this.$store);
    }
}
</script>

<style lang="scss" scoped>
    body {
        font-family: tahoma;
        color:#282828;
        margin: 0px;
    }
</style>
