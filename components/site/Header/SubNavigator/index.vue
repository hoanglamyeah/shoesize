<template>
    <nav class="navbar is-white" v-if="isShow">
        <div class="container">
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item is-active" href="#">Popular</a>
                    <a class="navbar-item" href="#">Recent</a>
                    <a class="navbar-item" href="#">Rising</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'index',
        computed: {
            isShow() {
                if (this.$route.path === '/campaign') {
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>

<style scoped>

</style>
