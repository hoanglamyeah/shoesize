<template>
    <section class="columns">
        <div class="column">
            <h1 class="title is-3">{{title}}</h1>
            <p class="mgb">{{brand.des}} Here are {{brand.name}} shoe size chart: </p>
            <div class="mgb" v-for="(entity,j) in chart" :key="j">
                <h2 class="title is-4">{{entity.name}}'s {{brand.name}} shoe size chart</h2>
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
                            <nuxt-link :to="'/jp/' + row.jp / 10">{{row.jp / 10}}</nuxt-link>
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
        name: 'index',
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.brand.des + 'Here are '+this.brand.name+' shoe size chart'}
                ]
            }
        },
        async asyncData({app, params}) {
            return {
                brand: chart.brands[params.brand],
                chart: chart.brands[params.brand].chart
            }
        },
        computed: {
            title() {
                return this.brand.name + " shoe size chart"
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
                    },
                    {
                        name: 'Nike',
                        slug: '/chart/nike'
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

<style scoped>

</style>
