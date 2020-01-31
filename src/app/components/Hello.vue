<!-- src/components/Hello.vue -->

<template>
    <div>
        <div class="greeting">Hello {{name}}</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ['name'],
    data() {},
    methods: {},
    computed: {
        exclamationMarks(): string {
            return Array(this.name).join('!');
        }
    }
});
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>