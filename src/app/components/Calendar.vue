<template>
    <UiCalendar
        v-model="selectedDate"
        :maxDate="new Date()"
        color="primary"
        :raised="true"
        :square-cells="false">
    </UiCalendar>
</template>

<script>
    import UiCalendar from "keen-ui/lib/UiCalendar.min";
    import moment from "moment";
    import store from "../store/store";

    export default {
        store,
        el: '#calendar',
        components: {
            UiCalendar,
        },
        computed: {
            selectedDate: {
                get() {
                    const { date } = this.$store.state.rates;
                    if (date.length > 0 && moment(date, 'YYYY-MM-DD').isValid()) {
                        return moment(date, 'YYYY-MM-DD').toDate();
                    }
                    return new Date();
                },
                set(value) {
                    const { base, symbols } = this.$store.state.rates;
                    const date = moment(value, 'YYYY-MM-DD');
                    this.$store.dispatch('rates/updateDate', date.format('YYYY-MM-DD'));
                    this.$store.dispatch(
                        "rates/fetchData",
                        { base, date: date.format('YYYY-MM-DD'), symbols }
                    );
                }
            },
            stringifySelectedDate: {
                get() {
                    return moment(this.selectedDate).format('YYYY-MM-DD')
                }
            }
        }
    }
</script>
