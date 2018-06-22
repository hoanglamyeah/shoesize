<template>
    <section class="columns is-multiline">
        <div class="column is-full">
            <h1 class="title is-3">{{title}}</h1>
            <p>
                {{location.description}}
            </p>
        </div>
        <div class="column is-full">
            <div class="columns is-multiline">
                <div class="column is-2" v-for="size in sizes" :key="size">
                    <nuxt-link class="button is-success" :to="'/' + location.id + '/' + size">
                        Size {{size}}
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import location from '../../data/location'

    export default {
        name: 'location',
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: 'My custom description'}
                ]
            }
        },

        async asyncData({app, params}) {
            return {
                location: location.sizes[params.location]
            }
        },

        computed: {
            breadcrumbs() {
                return [
                    {
                        name: 'Home',
                        slug: '/'
                    },
                    {
                        name: this.location.title,
                        slug: '/' + this.location.id
                    }
                ]
            },

            title() {
                return this.location.title + " Shoe Size"
            },

            sizes() {
                var arr = []
                for (var i = this.location.data[0]; i <= this.location.data[1]; i = i + this.location.data[2]) {
                    arr.push(i)
                }
                return arr
            }
        },

        mounted() {
            this.$store.dispatch('makeBreadcrumb', this.breadcrumbs)
        }
    }
</script>

<style scoped>

</style>
