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
        background-color: #2196f3;
        color: white;
        display: flex;
        height: 5rem;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        margin-bottom: 15px;
        border-radius: 3px;
    }
</style>
