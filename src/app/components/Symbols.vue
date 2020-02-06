<template>
    <div class="ui-symbols">
        <UiSelect
            label="filter"
            multiple
            placeholder="ALL"
            :options="symbolOptions"
            v-model="symbols" >
        </UiSelect>
    </div>
</template>

<script>
    import UiSelect from "keen-ui/lib/UiSelect";
    import store from "../store/store";

    export default {
        store,
        el: '#symbols',
        components: {
            UiSelect
        },
        data: () => {
            return {
                symbols: []
            }
        },
        computed: {
            symbolOptions: {
                get() {
                    return this.$store.state.rates.currencyList;
                }
            }
        },
        methods: {
            updateSymbols(value) {
                const { base, date } = this.$store.state.rates;
                this.$store.dispatch('rates/updateSymbols', value);
                this.$store.dispatch(
                    "rates/fetchData",
                    { base, date, symbols: value });
            }
        },
        watch: {
            symbols: function (value) {
                this.updateSymbols(value);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .ui-symbols {
        width: 20rem;
        margin: 10px;
    }
</style>
