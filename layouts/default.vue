<template>
    <div>
        <site-header></site-header>
        <main class="container">
            <breadcrumb></breadcrumb>
            <nuxt/>
        </main>
        <site-footer></site-footer>
    </div>
</template>

<script>
    import SiteFooter from '~/components/site/Footer.vue'
    import SiteHeader from '~/components/site/Header/index.vue'

    export default {
        components: {
            'site-footer': SiteFooter,
            'site-header': SiteHeader
        }
    }
</script>
