<template>
    <header>
        <navigator></navigator>
        <s-navigator></s-navigator>
    </header>
</template>

<script>
    import Navigator from './Navigator/index'
    import SubNavigator from './SubNavigator/index'

    export default {
        name: 'index',

        components: {
            'navigator': Navigator,
            's-navigator': SubNavigator
        }
    }
</script>

<style scoped>
    header {
        margin-bottom: 1rem;
    }
</style>
