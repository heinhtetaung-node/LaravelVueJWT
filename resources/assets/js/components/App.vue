<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <nav>
                <ul class="list-inline">
                    <li>
                        <router-link :to="{ name: 'Example' }">Example</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Register' }">Register</router-link>
                    </li>
                    <li class="pull-right" v-if="!auth.user.authenticated">
                        <router-link :to="{ name: 'signin' }">Sign in</router-link>
                    </li>
                    <li class="pull-right" v-if="auth.user.authenticated">
                        <a href="javascript:void(0)" v-on:click="signout">Sign out</a>
                    </li>
                    <li class="pull-right" v-if="auth.user.authenticated">
                        Hi, {{ auth.user.profile.name }}
                    </li>
                </ul>
            </nav>
        </div>
        <div class="panel-body">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>

</template>
<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>
<script>
import auth from '../auth.js'
export default {
    data() {
        return {
            auth: auth
        }
    },
    methods: {
        signout() {
            auth.signout()
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            auth.check()
        })
    }
}
</script>