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
      path: '/song/:song_id',
      name: 'song',
      component: require('@/components/SongPage').default
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
