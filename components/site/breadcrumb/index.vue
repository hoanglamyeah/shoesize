<template>
    <div class="bd-breadcrumb" v-if="breadcrumbs !== null">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li v-for="(breadcrumb, index) in breadcrumbs" :key="index"
                    v-bind:class="{'is-active': breadcrumbs.length-1 === index}">
                    <nuxt-link :to="breadcrumb.slug">{{breadcrumb.name}}</nuxt-link>
                </li>
            </ul>
        </nav>
        <nav class="bd-prev-next">
            <span>← </span>
            <a href="#" title="Card"> →</a>
        </nav>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'index',

        computed: {
            ...mapGetters({
                breadcrumbs: 'getBreadcrumb'
            }),
        },
    }
</script>

<style lang="scss">
    .bd-breadcrumb {
        display: flex;
        justify-content: space-between;
        .breadcrumb {
            margin-bottom: 0;
            margin-top: 0.5rem;
        }
    }
</style>
