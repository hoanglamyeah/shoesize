<template>
    <section class="columns is-multiline">
        <div class="column is-full">
            <h1 class="title is-3">{{title}}</h1>
            <p>
                Here are all about size {{size}} shoe in {{location.title}} shoe size and list shoes in size {{size}} update regularly
            </p>
        </div>
        <div class="column is-full">
            <p class="mgb-1">You can convert size {{size}} from {{location.title}} size to other size, follow table
                bellow:</p>
            <div class="mgb" v-for="brand in brands" :key="brand.id" v-if="filterRow(brand.chart).length > 0">
                <h3 class="title is-5">{{brand.name}}</h3>
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                    <tr>
                        <th v-bind:class="{'highlight': highlight('us')}" class="" width="16.666%">US</th>
                        <th v-bind:class="{'highlight': highlight('uk')}" width="16.666%">UK</th>
                        <th v-bind:class="{'highlight': highlight('eu')}" width="16.666%">EU</th>
                        <th v-bind:class="{'highlight': highlight('jp')}" width="16.666%">JP</th>
                        <th width="16.666%">INCH</th>
                        <th width="16.666%">CM</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(row, i) in filterRow(brand.chart)" :key="i">
                        <td v-bind:class="{'highlight': highlight('us')}">
                            <nuxt-link :to="'/us/' + row.records.us">{{row.records.us}}</nuxt-link>
                        </td>
                        <td v-bind:class="{'highlight': highlight('uk')}">
                            <nuxt-link :to="'/uk/' + row.records.uk">{{row.records.uk}}</nuxt-link>
                        </td>
                        <td v-bind:class="{'highlight': highlight('eu')}">
                            <nuxt-link :to="'/eu/' + row.records.eu">{{row.records.eu}}</nuxt-link>
                        </td>
                        <td v-bind:class="{'highlight': highlight('jp')}">
                            <nuxt-link :to="'/jp/' + row.records.jp">{{row.records.jp}}</nuxt-link>
                        </td>
                        <td>{{toInch(row.records.cm[0])}}</td>
                        <td>
                            <b-tooltip :label="row.who + '\'s Size'" position="is-top">
                                {{row.records.cm[0]}} - {{row.records.cm[1]}}
                            </b-tooltip>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
    import location from '../../data/location'
    import chart from '../../data/chart'

    export default {
        name: 'size',
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: 'Here are all about size '+this.size+' shoe in '+this.location.title+' shoe size and list shoes in size '+this.size+' update regularly'}
                ]
            }
        },

        async asyncData({app, params}) {
            return {
                location: location.sizes[params.location],
                size: params.size,
                brands: chart.brands
            }
        },

        computed: {
            title() {
                return "Size " + this.size + " Shoes - " + this.location.title
            },

            breadcrumbs() {
                return [
                    {
                        name: 'Home',
                        slug: '/'
                    },
                    {
                        name: this.location.title,
                        slug: '/' + this.location.id
                    },
                    {
                        name: 'Size ' + this.size,
                        slug: '/' + this.location.id + '/' + this.size
                    }
                ]
            },
        },

        mounted() {
            this.$store.dispatch('makeBreadcrumb', this.breadcrumbs)
        },

        methods: {
            filterRow(chart) {
                var arr = []
                for (var row in chart) {
                    for (var record in chart[row].data) {
                        if (chart[row].data[record][this.location.id] === Number.parseFloat(this.size)) {
                            arr.push(
                                {
                                    who: chart[row].name,
                                    records: chart[row].data[record]
                                }
                            )
                        }
                    }
                }
                return arr
            },

            toInch(cm) {
                return (cm / 2.54).toFixed(2)
            },

            highlight(what) {
                return this.$route.params.location === what
            }
        }
    }
</script>

<style scoped>

</style>
