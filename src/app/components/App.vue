<template>
    <div>
        <NavBar title="Exchange rate"></NavBar>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import store from "../store/store";

export default {
    store,
    el: '#app',
    components: {
        NavBar
    },
    data: () => {
      return {
          symbols:[]
      }
    },
    methods: {
        getCurrencyList() {
            this.$store.dispatch("rates/fetchCurrencyList");
        }
    },
    mounted() {
        this.getCurrencyList();
    }
}
</script>

<style lang="scss" scoped>
    body {
        color:#282828;
        margin: 0;
        padding: 0;
    }
</style>
