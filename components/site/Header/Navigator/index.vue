<template>
    <nav class="navbar is-white topNav">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link class="navbar-item" to="/">
                    <img src="../../../../assets/img/logo@2.png" height="50px">
                </nuxt-link>
                <a role="button" class="burger navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" id="navMenu">
                <div class="navbar-start">
                    <nuxt-link class="navbar-item" to="/chart">
                        <b-icon pack="fa" icon="table" size="is-small"></b-icon>
                        <span>Chart</span></nuxt-link>
                    <nuxt-link class="navbar-item" to="/eu">
                        <b-icon pack="fa" icon="table" size="is-small"></b-icon>
                        <span>EU</span>
                    </nuxt-link>
                    <nuxt-link class="navbar-item" to="/uk"><span class="flag-icon flag-icon-gb"></span>
                        <span>UK</span>
                    </nuxt-link>
                    <nuxt-link class="navbar-item" to="/us"><span class="flag-icon flag-icon-us"></span>
                        <span>US</span>
                    </nuxt-link>
                    <nuxt-link class="navbar-item" to="/jp"><span class="flag-icon flag-icon-jp"></span>
                        <span>JP</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'index'
    }
</script>

<style lang="scss">
    .flag-icon {
        width: 1em;
        margin-right: 10px;
    }

    .navbar-item {
        .icon.is-small {
            height: 1rem;
            width: 1.6rem;
        }
    }


    .fa {
        margin-right: 10px;
    }
</style>
