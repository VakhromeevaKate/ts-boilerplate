<template>
    <NavBar title="Exchange rate"></NavBar>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
    // store,
    el: '#app',
    components: {
        NavBar
    },
    mounted: function() {
        console.log("app is mounted")
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
