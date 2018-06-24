<template>
    <section class="columns is-multiline">
        <div class="column is-full">
            <h1 class="title is-3">{{title}}</h1>
            <p class="mgb">Here are shoe size chart that help determine your size. Each shoe brand has a different shoe
                size chart. We provide all here.</p>
            <div class="columns is-multiline">
                <div class="column is-3" v-for="brand in brands" :key="brand.id">
                    <div class="media brand">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="../../assets/img/brand/shoe.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <h4>
                                <nuxt-link :to="'/chart/' + brand.id">{{brand.name}}</nuxt-link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-full">
            <div class="mgb" v-for="(entity,j) in brands.general.chart" :key="j">
                <h2 class="title is-4">{{entity.name}}'s shoe size chart</h2>
                <table v-if="entity.data.length > 0"
                       class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                    <tr>
                        <th width="16.666%">US</th>
                        <th width="16.666%">UK</th>
                        <th width="16.666%">EU</th>
                        <th width="16.666%">JP</th>
                        <th width="16.666%">INCH</th>
                        <th width="16.666%">CM</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(row,i) in entity.data" :key="i">
                        <td>
                            <nuxt-link :to="'/us/' + row.us">{{row.us}}</nuxt-link>
                        </td>
                        <td>
                            <nuxt-link :to="'/uk/' + row.uk">{{row.uk}}</nuxt-link>
                        </td>
                        <td>
                            <nuxt-link :to="'/eu/' + row.eu">{{row.eu}}</nuxt-link>
                        </td>
                        <td>
                            <nuxt-link :to="'/jp/' + row.jp / 10">{{row.jp /10}}</nuxt-link>
                        </td>
                        <td>{{toInch(row.cm[0])}}</td>
                        <td>{{row.cm[0]}} - {{row.cm[1]}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
    import chart from '../../data/chart'

    export default {
        name: 'chard',
        head() {
            return {
                title: this.title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Here are shoe size chart that help determine your size. Each shoe brand has a different shoe size chart. We provide all here.'
                    }
                ]
            }
        },
        async asyncData({app, params}) {
            return {
                brands: chart.brands
            }
        },
        computed: {
            title() {
                return "Shoe Size Conversion Chart"
            },

            breadcrumbs() {
                return [
                    {
                        name: 'Home',
                        slug: '/'
                    },
                    {
                        name: 'Chart',
                        slug: '/chart'
                    }
                ]
            }
        },

        mounted() {
            this.$store.dispatch('makeBreadcrumb', this.breadcrumbs)
        },

        methods: {
            toInch(cm) {
                return (cm / 2.54).toFixed(2)
            }
        }
    }
</script>

<style lang="scss">

</style>
