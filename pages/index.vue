<template>
    <div class="hero">
        <div class="hero-body">
            <h1 class="title is-3 site-title"><i class="fa fa-search"></i> Shoe Size Finder</h1>
            <div class="columns">
                <div class="column">
                    <div class="field has-addons">
                        <p class="control">
                            <span class="select is-large">
                            <select v-model="type">
                                <option value="cm">CM</option>
                                <option value="in">IN</option>
                            </select>
                            </span>
                        </p>
                        <p class="control is-expanded">
                            <input class="input is-large" type="number" placeholder="0,00" v-model="input" @keyup.enter.native="getResult">
                        </p>
                        <p class="control">
                            <button class="button is-large is-primary" @click="getResult">Find Size</button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="columns is-multiline">
                <div class="column is-full">
                    <h4 class="has-text-centered title is-5">Result</h4>
                    <b-tabs type="is-boxed">
                        <b-tab-item v-for="brand in chart.brands" :label="brand.name" :key="brand.id"
                                    v-if="filterRow(brand.chart).length > 0">
                            <div class="level" v-for="(row, i) in filterRow(brand.chart)" :key="i">
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">US SIZE</p>
                                        <p class="title">
                                            <b-tooltip :label="row.who + '\' Size'" position="is-top">
                                                {{row.records.us}}
                                            </b-tooltip>
                                        </p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">UK SIZE</p>
                                        <p class="title">
                                            <b-tooltip :label="row.who + '\' Size'" position="is-top">
                                                {{row.records.uk}}
                                            </b-tooltip>
                                        </p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">EU SIZE</p>
                                        <p class="title">
                                            <b-tooltip :label="row.who + '\' Size'" position="is-top">
                                                {{row.records.eu}}
                                            </b-tooltip>
                                        </p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">JP SIZE</p>
                                        <p class="title">
                                            <b-tooltip :label="row.who + '\' Size'" position="is-top">
                                                {{row.records.jp}}
                                            </b-tooltip>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </b-tab-item>
                    </b-tabs>
                </div>
                <div class="column is-full">
                    <figure class="image">
                        <img src="../assets/img/shoe-size-tag.jpg" alt="Your shoe size">
                    </figure>
                </div>
            </div>
            <div class="columns">
                <div class="column content">
                    <h2 class="title is-5">To determine your U.S., U.K., or European shoe size:</h2>
                    <ol>
                        <li>Use a ruler or tape measurer to measure your foot (from the heel to the tip of your longest
                            toe).
                        </li>
                        <li>Choose a table below (U.S. to find your U.S. size, U.K. to find your U.K. size, Euro to find
                            your European size).
                        </li>
                        <li>Find the closest measurement, in inches, that is equal to or greater than the length of your
                            foot. For example, a man whose foot measures 11-1/4 inches is a U.S. 12, a U.K. 12, or a
                            European 47.
                        </li>
                    </ol>
                    <h2 class="title is-5">Measuring Tips:</h2>
                    <ul>
                        <li>To ensure an accurate reading when measuring, flatten your foot by shifting your weight
                            forward.
                        </li>
                        <li>If your measurement is between two sizes, always move up to the larger size.</li>
                        <li>Be sure to measure both feet. Many people have feet of different sizes. Fit to the larger of
                            the two.
                        </li>
                        <li>Fit yourself at a similar time as when you will be wearing the footwear. For daily footwear,
                            fit yourself when you've been on your feet all day because your feet have expanded.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppLogo from '~/components/AppLogo.vue'
    import location from '../data/location'
    import chart from '../data/chart'

    export default {
        components: {
            AppLogo
        },

        data() {
            return {
                input: 23,
                type: 'cm',
                location: location,
                chart: chart,
                temp_input: 23
            }
        },

        head() {
            return {
                title: 'Your Shoe Size',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Your Shoe Size help you to find automatic the right shoe size by using machine learning and big data. Just need your foot size!'
                    }
                ]
            }
        },

        computed: {
            breadcrumbs() {
                return null
            },

            centimetre() {
                if (this.type === 'cm') {
                    return this.temp_input
                } else {
                    return this.temp_input * 2.54
                }
            }
        },

        mounted() {
            this.$store.dispatch('makeBreadcrumb', this.breadcrumbs)
        },

        methods: {
            getResult() {
                this.temp_input = this.input
            },

            filterRow(chart) {
                var arr = []
                for (var entity in chart) {
                    var dkm = chart[entity].data
                    for (var j in dkm) {
                        if (this.centimetre >= dkm[j].cm[0] && this.centimetre <= dkm[j].cm[1]) {
                            arr.push(
                                {
                                    who: chart[entity].name,
                                    records: dkm[j]
                                }
                            )
                        }
                    }
                }
                return arr
            },
        }
    }
</script>
<style lang="scss">
</style>
