import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
function load(component) {
  return () => System.import(`./components/${components}.vue`)
}
export default new Router({
  routes: [
       {
            path: '/',
            name: '首页',
            component: function (resolve) {
                require(['./pages/HelloFromVux'], resolve)
            },
        },
              {
            path: '/Hello',
            name: '首页',
            component: function (resolve) {
                require(['./pages/Hello'], resolve)
            },
        },
          {
            path: '/index',
            name: '首页',
            component: function (resolve) {
                require(['./pages/index'], resolve)
            },
        },
           {
            path: '/shop',
            name: '首页',
            component: function (resolve) {
                require(['./pages/user/shop'], resolve)
            },
        },
           {
            path: '/goods',
            name: '首页',
            component: function (resolve) {
                require(['./pages/user/goods'], resolve)
            },
        }

  ]
})
