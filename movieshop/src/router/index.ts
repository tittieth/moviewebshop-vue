import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
          meta: {index: true}
        },
        {
          path: "/movie/:id",
          name: "movie",
          component: MovieView,
          props: true,
        },
        {
          path: '/cart',
          name: 'cartview',
          component: CartView,
        }
      ]
    },
  ]
})

export default router
