<template>
<div>

    <!--<router-link to="/Bar">bar</router-link>-->
  <!--<router-link to="/foo">bar</router-link>-->
   <!--<router-view></router-view>-->
</div>
</template>


<script>
  import foo from 'foo'
  import Bar from 'Bar'
  import router from 'vue-router'
  import Vue from 'vue'
  Vue.use(router)

  export default {
    name: 'router',
    routes: [
      {
        path: '/foo',
        component: foo
      },
      {
        path: '/Bar',
        component: Bar
      }
    ]
  }
</script>

<style scoped>

</style>
