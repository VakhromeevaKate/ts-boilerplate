<template>
    <div>
        <NavBar title="Exchange rate"></NavBar>
        <div>
            <UiCalendar
                v-model="selectedDate"
                :maxDate="new Date()"
                color="primary"
                :raised="true"
                :square-cells="false">
            </UiCalendar>
            <UiSelect
                label="Base currency"
                placeholder="Select base"
                :options="baseOptions"
                v-model="selectedBase" >
            </UiSelect>
        </div>
        <div>
            <Table
                :rates="ratesList"
                :base="selectedBase"
                :date="stringifySelectedDate"
            />
        </div>
        <div>
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
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Table from "./Table.vue";
import UiSelect from "keen-ui/lib/UiSelect";
import UiCalendar from "keen-ui/lib/UiCalendar";
import UiButton from "keen-ui/lib/UiButton";
import moment from "moment";
import store from "../store/store";

export default {
    store,
    el: '#app',
    components: {
        NavBar,
        Table,
        UiCalendar,
        UiButton,
        UiSelect
    },
    computed: {
        selectedDate: {
            get() {
                const strDate = this.$store.state.rates.date;
                if (strDate.length > 0 && moment(strDate, 'YYYY-MM-DD').isValid()) {
                    return moment(strDate, 'YYYY-MM-DD').toDate();
                }
                return new Date();
            },
            set(value) {
                const date = moment(value, 'YYYY-MM-DD');
                this.$store.dispatch('rates/updateDate', date.format('YYYY-MM-DD'));
                this.$store.dispatch(
                    "rates/fetchData",
                    { base: this.selectedBase, date: date.format('YYYY-MM-DD') }
                );
            }
        },
        stringifySelectedDate: {
            get() {
                return moment(this.selectedDate).format('YYYY-MM-DD')
            }
        },
        selectedBase: {
            get() {
                return this.$store.state.rates.base
            },
            set(value) {
                this.$store.dispatch('rates/updateBase', value);
                this.$store.dispatch(
                    "rates/fetchData",
                    { base: value, date: this.stringifySelectedDate });
            }
        },
        baseOptions: {
            get() {
                return Object.keys(this.$store.state.rates.rates);
            }
        },
        ratesList: {
            get() {
                let list = [];
                for (let key in this.$store.state.rates.rates) {
                    list.push({ name: key, value: this.$store.state.rates.rates[key] });
                }
                return list;
            }
        }
    },
    methods: {
        updateRates() {
            const base = this.selectedBase;
            const date = moment(this.selectedDate).format('YYYY-MM-DD');
            this.$store.dispatch(
                "rates/fetchData",
                { base, date }
            );
        }
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
