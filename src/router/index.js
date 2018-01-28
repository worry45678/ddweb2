// router
import Chart from '../components/Chart.vue'
import Login from '../components/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/Home.vue'
import Table from '../components/table.vue'

let routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        name: 'home',
        component: HelloWorld
      },
      {
        path: 'hello',
        name: 'hello',
        component: HelloWorld
      },
      {
        path: 'chart',
        name: 'chart',
        component: Chart
      },
      {
        path: 'welcome',
        name: 'welcome',
        component: HelloWorld
      },
      {
        path: 'table',
        name: 'table',
        component: Table
      }
    ]
  }
]

export default routes
