// router
import Chart from '../components/Chart.vue'
import Login from '../components/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/Home.vue'

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
        name: 'Hello',
        component: HelloWorld
      },
      {
        path: 'chart',
        name: 'Chart',
        component: Chart
      },
      {
        path: 'welcome',
        name: 'Welcome',
        component: HelloWorld
      }
    ]
  }
]

export default routes
