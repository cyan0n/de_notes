import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'song-list',
      component: require('@/components/SongListPage').default
    },
    {
      path: '/migration',
      name: 'migration',
      component: require('@/components/MigrationPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
