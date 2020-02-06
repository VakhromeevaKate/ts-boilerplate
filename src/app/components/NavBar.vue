<template>
    <div class="nav-bar">
        <div class="nav-bar-header">
            <div class="nav-bar-element">
                <h1>{{ title }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["title"],
    }
</script>

<style lang="scss" scoped>
    $accent-color: #2196f3;
    .nav-bar {
        color: $accent-color;
        display: flex;
        height: 5rem;
        justify-content: space-between;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        border-radius: 3px;
    }

    .nav-bar-header {
        width: 100%;
        margin: auto 2rem;
        display: flex;
        justify-content: space-between;
    }

    .nav-bar-element {
        margin: 10px;
    }

</style>
