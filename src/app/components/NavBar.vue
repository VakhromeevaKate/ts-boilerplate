<template>
    <div class="nav-bar">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: ["title"]
}
</script>

<style lang="scss" scoped>
    .nav-bar {
        background: linear-gradient(-90deg, #84CF6A, #16C0B0);
        height: 60px;
        margin-bottom: 15px;
    }
</style>