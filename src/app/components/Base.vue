<template>
    <div class="ui-base">
        <UiSelect
            label="Base currency"
            placeholder="Select base"
            :options="baseOptions"
            v-model="selectedBase" >
        </UiSelect>
    </div>
</template>

<script>
    import UiSelect from "keen-ui/lib/UiSelect";
    import store from "../store/store";

    export default {
        store,
        el: '#base',
        components: {
            UiSelect
        },
        data: () => {
            return {
                symbols: []
            }
        },
        computed: {
            selectedBase: {
                get() {
                    return this.$store.state.rates.base
                },
                set(value) {
                    const { date, symbols } = this.$store.state.rates;
                    this.$store.dispatch('rates/updateBase', value);
                    this.$store.dispatch(
                        "rates/fetchData",
                        {base: value, date, symbols});
                }
            },
            baseOptions: {
                get() {
                    return this.$store.state.rates.currencyList;
                }
            },
        }
    }

</script>

<style lang="scss" scoped>
    .ui-base {
        width: 20rem;
        margin: 10px;
    }
</style>
