<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <nav>
                <ul class="list-inline">
                    <li>
                        <router-link :to="{ name: 'example' }">Example</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Register' }">Register</router-link>
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
    export default{
    }
</script>