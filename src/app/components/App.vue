<template>
    <div>
        <NavBar title="Exchange rate"></NavBar>
            <UiButton
                buttonType="button"
                v-on:click="updateRates"
                color="primary"
                size="normal"
                raised
            >
                Update rates
            </UiButton>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import UiButton from "keen-ui/lib/UiButton";
import store from "../store/store";

export default {
    store,
    el: '#app',
    components: {
        NavBar,
        UiButton
    },
    data: () => {
      return {
          symbols:[]
      }
    },
    methods: {
        updateRates() {
            const { base, date, symbols } = this.$store.state.rates;
            this.$store.dispatch(
                "rates/fetchData",
                { base, date, symbols }
            );
        },
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
